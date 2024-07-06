import Header from '../atomComponents/Header';
import Image from '../atomComponents/Image';
import LabelAmount from '../atomComponents/LabelAmount';

const content = {
    header: 'check',
    type: 'search',
    logo: 'https://www.supeco.net/wp-content/uploads/2019/04/logo-carr%C3%A9.jpg',
    url: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2R8ZW58MHx8MHx8fDA%3D',
    // nickname: 'tomatoe sauce',
    name: 'keptchup',
    brand: 'carrefour',
    labelOne: {
        title: 'to paid: ',
        amount: '1.00 €',
        unit: '/package'
    },
    labelTwo: {
        title: 'Price per unit / kg / L: ',
        amount: '1.00 €',
        unit: '/Kg'
    },
    // contentBar: 25
}

function Cart({content}) {
    const { type, header, logo, url, name, brand, labelOne, labelTwo, nickname, contentBar } = content;
    return (
        <article className={`cart ${type}`}>
            <Header type={header} logo={logo}/>
            <Image img={url}/>

            <section className='cart_content'>
                {contentBar ? <progress className='content_bar' value={contentBar} max={100} /> : null}
                { nickname ? 
                    <>
                    <h1 className='font_12'>{nickname}</h1>
                    <p className='font_12'>{name}</p></>  
                    : <h1 className='font_12'>{name}</h1>}
                <p className='font_8'>{brand}</p>
                <section className='flex_r price_contaner'>
                    <LabelAmount title={labelOne.title} amount={labelOne.amount} unit={labelOne.unit}/>
                    <LabelAmount title={labelTwo.title} amount={labelTwo.amount} unit={labelTwo.unit}/>
                </section>
            </section>
        </article>
    );
};


function List() {
    
    return (
        <>
           <Cart content={content}/>
        </>
    )
};

export default List;