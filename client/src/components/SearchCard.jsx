import { Image, Logo, LabelAmount } from '../atomComponents';

function SearchCard({ id, logo, img, name, brand, labelOne, labelTwo, handle}) {
    return (
        <article className='card search'>
            <header className='header'>
                <Logo img={logo}/>
                <div className='check flex_r'>
                    <input className='checkbox' id={id} type='checkbox' onChange={(e) => handle(e.target)}/>
                </div>
            </header>
            <section className='content'>
                <Image img={img}/>
                <section className='card_text'>
                    <h1 className='font_12'>{name}</h1>
                    <p className='font_8'>{brand}</p>
                    <section className='flex_r price_contaner'>
                        <LabelAmount data={{title: labelOne.title, amount: labelOne.amount, currency: labelOne.currency,  unit: labelOne.unit, edit: false}}/>
                        <LabelAmount data={{title: labelTwo.title, amount: labelTwo.amount, currency: labelTwo.currency,  unit: labelTwo.unit, edit: false}}/>
                    </section>
                </section>
            </section>
        </article>
    );
};

export default SearchCard;