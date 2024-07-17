import { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";
import RegularCard from '../components/RegularCard';
import { logoStore, pricePerKg } from '../utils/card';
import { shoppingListModel, productsModel} from '../models';

function List() {
    const [displayShoppingList, setDisplayShoppingList] = useState(false);
    const [catalog, setCatalog] = useState([]);
    const [shoppingList, setShoppingList] = useState({});
    const [currentList, setCurrentList] = useState([]);

    const setIntoList = (productId, quantity) => {
        setShoppingList(oldList => ({ ...oldList, [productId]: Number(quantity) }));
    };

    const setProducts = async() => {
        const products = await productsModel.getProducts();
        setCatalog(products);
    };

    const setList = async() => { 
        const list = await shoppingListModel.getListItems();
        if (list) {
            list.map( item => setIntoList(item.uid, item.quantity))
        }
        setCurrentList(list);
    };

    useEffect(() => {
        setList();
        setProducts();
    }, []);

    // console.log('shoppingList', shoppingList);
    // console.log('currentList', currentList);
    const createListItems = () => {
        const cleanShoppingList = Object.entries(shoppingList)
        .filter(([, quantity]) => quantity !== 0)
        .map(([uid, quantity]) => ({uid, quantity}));
        shoppingListModel.postList(cleanShoppingList);
        setList();
    };

    return(
        <section className='search'>
            { displayShoppingList && currentList?.map(product => 
            <RegularCard
                style={'shopList'}
                id={product.product_uid}
                logo={logoStore(product.store)} 
                img={product.img}
                name={product.name}
                brand={product.store}
                setQuantity={quantity => setIntoList(product.product_uid, quantity)}
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

            { !displayShoppingList && catalog?.map(product => 
            <RegularCard
                style={'search'}
                id={product.uid}
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
            <div className='icon_div menu' onClick={() => setDisplayShoppingList(!displayShoppingList)}>{displayShoppingList ? <FaRegEyeSlash className="icon"/> : <FaRegEye className="icon"/>}</div>
        </section>
    )
};

export default List;