import { useContext } from "react";
import SearchCard from "../components/SearchCard";
import products from "../assets/products.json";
import { logoStore, pricePerKg } from "../utils/card";
import { shoppingListContext } from '../context/shoppingListContext';

function Search() {
    const {shoppingList} = useContext(shoppingListContext);

    const handleCheckedELement = (element) => {
        const item = products.filter(product => product.uid === element.getAttribute('id'));
        const included = shoppingList.includes(...item);

        if (element.checked && !included) {
            shoppingList.push(...item);
        } 
        else if (!element.checked && included) {
            const itemIndex = shoppingList.indexOf(...item);
            shoppingList.splice(itemIndex, 1);
        }
        else { return }
    };

    return(
        <section className='search'>
            { products?.map(product => 
            <SearchCard
                id={product.uid}
                handle={handleCheckedELement}
                logo={logoStore(product.store)} 
                img={product.img}
                name={product.name}
                brand={product.store}
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
                key={product.uid}/>)}
        </section>
    )
};

export default Search;