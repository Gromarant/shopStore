import { useContext } from 'react';
import { logoStore, pricePerKg } from '../utils/card';
import { shoppingListContext } from '../context/shoppingListContext';
import { ShoppingCard } from '../components';




function List() {
    const {shoppingList} = useContext(shoppingListContext);
    const handleCheckedELement = (element) => console.log(element);

    return (
        <section className='search'>
            { shoppingList?.map(product => 
            <ShoppingCard
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
            count={1}
            key={product.uid}/>)}
        </section>
    )
};

export default List;