// import { useEffect, useState } from "react";
// import axios from 'axios';
import SearchCard from "../components/SearchCard";
import products from "../assets/products.json";
import { logoStore, pricePerKg } from "../utils/card";

function Search() {
    return(
        <section className='search'>
            { products?.map(product => 
            <SearchCard 
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