import Counter from '../atomComponents/Counter';
import Header from '../atomComponents/Header';
import Image from '../atomComponents/Image';
import LabelAmount from '../atomComponents/LabelAmount';

let content = {
    // id: 
    header: 'check',
    logo: 'https://www.supeco.net/wp-content/uploads/2019/04/logo-carr%C3%A9.jpg',
    url: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2R8ZW58MHx8MHx8fDA%3D',
    // nickname: 'tomatoe sauce',
    name: 'keptchup',
    brand: 'carrefour',
    labelOne: {
        title: 'to paid: ',
        amount: '1.50',
        currency: ' €',
        unit: 'package'
    },
    labelTwo: {
        title: 'Price per unit / kg / L: ',
        amount: '1.30',
        currency: '€',
        unit: 'Kg'
    },
    // contentBar: 25
    count: 2
}


function Card({type, header, content}) {
    const { logo, url, name, brand, labelOne, labelTwo, nickname, contentBar, count } = content;
    const edit = () => type === 'shopListEdit' ? true : false;

    return (
        <article className={`cart ${type}`}>
            <Header type={header} logo={logo}/>
            <section className='content'>
                <Image img={url}/>
                <section className='cart_text'>
                    {type === 'pantry' && contentBar ? <progress className='content_bar' value={contentBar} max={100} /> : null}
                    { nickname ? 
                        <>
                        <h1 className='font_12'>{nickname}</h1>
                        <p className='font_12'>{name}</p></>  
                        : <h1 className='font_12'>{name}</h1>}
                    <p className='font_8'>{brand}</p>
                    <section className='flex_r price_contaner'>
                        <LabelAmount data={{title: labelOne.title, amount: labelOne.amount, currency: labelOne.currency,  unit: labelOne.unit, edit: edit()}}/>
                        <LabelAmount data={{title: labelTwo.title, amount: labelTwo.amount, currency: labelTwo.currency,  unit: labelTwo.unit, edit: edit()}}/>
                    </section>
                    {count ? <Counter count={count}/> : null}
                </section>
            </section>
        </article>
    );
};


function List() {
    
    return (
        <>
           <Card type={'shopListEdit'} header={'check'} content={content}/>
           <Card type={'search'} header={'check'} content={content}/>
           <Card type={'shopList'} header={'check'} content={content}/>
           <Card type={'search'} header={'check'} content={content}/>
           <Card type={'shopList'} header={'check'} content={content}/>
           <Card type={'pantry'} header={'check'} content={content}/>
           <Card type={'pantry'} header={'edit'} content={content}/>
        </>
    )
};

export default List;