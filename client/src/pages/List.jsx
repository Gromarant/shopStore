import { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import RegularCard from '../components/RegularCard';
import { logoStore, pricePerKg } from '../utils/card';
import { shoppingListModel, productsModel } from '../models';

function List() {
    const [displayShoppingList, setDisplayShoppingList] = useState(false);
    const [catalog, setCatalog] = useState([]);
    const [shoppingList, setShoppingList] = useState({});
    const [cleanShoppingList, setCleanShoppingList] = useState([]);
    let totalToPay = 0;


    const setIntoList = (product, quantity) => setShoppingList(oldList => ({ ...oldList, [product.uid]: { ...product, quantity: Number(quantity) } }));

    const setProducts = async() => {
        const products = await productsModel.getProducts();
        setCatalog(products);
    };
    
    const setList = async() => { 
        const list = await shoppingListModel.getListItems();
        list.map( item => setIntoList(item, item.quantity));
    };
    
    const setFavorite = async(id, product, favoriteProp) => {
        await productsModel.updateProduct(id, { ...product, favorite: favoriteProp });
        setProducts();
        setList();
    };

    const updateShoppingListproducts = async(list) => {
        const listItemsId = await list.map(item => item.id);
        await shoppingListModel.updateListItems(listItemsId);
        setList();
        setProducts();
    };
    
    useEffect(() => {
        setList();
        setProducts();
        setCleanShoppingList(getCleanShoppingList(shoppingList));
    }, []);
    
    const getCleanShoppingList = (objectList) => Object.values(objectList)?.filter(product => product.quantity !== 0);

    const createListItems = () => {
        setCleanShoppingList(getCleanShoppingList(shoppingList));
        shoppingListModel.postList(cleanShoppingList);
    };

    const setShoppingListData = () => {
        const shoppingData = getCleanShoppingList(shoppingList);
        const price = [ ...shoppingData ];

        if (displayShoppingList) {
            totalToPay = price?.map(product => (Number(product.price) * product.quantity)).reduce((amount, price) => amount + price).toFixed(2);
        };
        return shoppingData
    };

    const shoppingListElements = () => ['shopList', setShoppingListData(), FaRegEyeSlash];
    const catalogListElements = ['search', catalog, FaRegEye];
    const [style, data, ToggleIcon] = displayShoppingList ? shoppingListElements() : catalogListElements;

    return(
        <section className='search'>
            { data.map(product => 
            <RegularCard
                style={style}
                id={product.product_uid}
                logo={logoStore(product.store)} 
                img={product.img}
                name={product.name}
                brand={product.store}
                setQuantity={quantity => setIntoList(product, quantity)}
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
                favorite={product.favorite}
                setFavorite={() => setFavorite(product.uid, product, !product.favorite)}
                count={shoppingList[product.uid]?.quantity}
                key={product.uid}/>)}
            <article>
                <p>Total</p>
                {`${totalToPay} €`}
            </article>
            <button className='cta createList' onClick={() => createListItems()}>Create List</button>
            <div className={`${cleanShoppingList ? 'icon_div menu' : 'hidden'}`} onClick={() => setDisplayShoppingList(!displayShoppingList)}>
                <ToggleIcon className="icon"/>
            </div>
            { displayShoppingList ? <div className='icon_div reload' onClick={() => updateShoppingListproducts(getCleanShoppingList(shoppingList))}>
                <GrUpdate className="icon"/>
            </div> : null}
        </section>
    )
};

export default List;