import { useState, useEffect } from 'react';
import RegularCard from '../components/RegularCard';
import { logoStore, pricePerKg } from '../utils/card';
import { shoppingListModel, productsModel} from '../models';

function Search() {
    const [catalog, setCatalog] = useState([]);
    const [shoppingList, setShoppingList] = useState({});

    const setIntoList = (productId, quantity) => {
        setShoppingList(oldList => ({ ...oldList, [productId]: Number(quantity) }));
    };

    useEffect(() => {
        const setProducts = async () => {
            const products = await productsModel.getProducts();
            setCatalog(products);
        };
        setProducts();
    }, []);

    const createListItems = () => {
        const cleanShoppingList = Object.entries(shoppingList)
        .filter(([, quantity]) => quantity !== 0)
        .map(([uid, quantity]) => ({uid, quantity}));
        shoppingListModel.postList(cleanShoppingList);
    };

    const handleProductQuantity = (productId, checked) => {
        const quantity = document.querySelector(`#card${productId} .counter .input`).value;
        if ( checked && quantity <= 0 ) { 
            document.querySelector(`#card${productId} .counter .input`).value = 1;
            return 1
        }
        else if ( checked && quantity > 0 ) { 
            document.querySelector(`#card${productId} .counter .input`).value = quantity;
            return quantity
        }
        else {
            document.querySelector(`#card${productId} .counter .input`).value = 0; 
        }
    };

    const getQuantity = (id) => document.querySelector(`#card${id} .counter .input`).value;

    const handleSelectedELement = (element) => {
        const item = catalog.filter(product => product.uid === element.getAttribute('id'));
        let product = item.shift();
        const included = shoppingList.includes(product);
        let quantity = getQuantity(product.uid);

        if (element.checked && !included) {
            quantity = handleProductQuantity(product.uid, true);
            product.quantity = quantity;
            shoppingList.push(product);
        } 
        else if (!element.checked && included) {
            handleProductQuantity(product.uid, false)
            const itemIndex = shoppingList.indexOf(product);
            shoppingList.splice(itemIndex, 1);
        }
        else { return }
    };

    return(
        <section className='search'>
            { catalog?.map(product => 
            <RegularCard
                id={product.uid}
                handle={handleSelectedELement}
                logo={logoStore(product.store)} 
                img={product.img}
                name={product.name}
                brand={product.store}
                setQuantity={quantity => setIntoList(product.uid, quantity)}
                labelOne={{
                    title: 'to paid: ',
                    amount: product.price,
                    currency: ' €',
                    unit: ` ${product.content} ${product.measure}`
                }} 
                labelTwo={{
                    title: 'Price per: ',
                    amount: pricePerKg(product.measure, parseFloat(product.price), product.content),
                    currency: '€',
                    unit: 'Kg'
                }}
                count={shoppingList[product.uid]}
                key={product.uid}/>)}
            <button className='cta createList' onClick={() => createListItems()}>Create List</button>
        </section>
    )
};

export default Search;