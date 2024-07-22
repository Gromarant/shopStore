import { Image, Logo, LabelAmount, Counter, IconStar } from '../atomComponents';

function RegularCard({
    style, id, logo, img, name, brand, labelOne, labelTwo, setQuantity, count = 0, favorite, setFavorite
}) {
    return (
        <article className={`card ${style}`} id={`card${id}`}>
            <header className='header'>
                <Logo img={logo}/>
                <div className='check flex_r'>
                    <input className='checkbox' id={id} type='checkbox' checked={count > 0} onChange={(e) => setQuantity(e.target.checked ? 1 : 0)}/>
                </div>
            </header>
            <section className='content'>
                <Image img={img}>
                    <IconStar favorite={favorite} toggle={setFavorite}/>
                </Image>
                <section className='card_text'>
                    <h1 className='font_12'>{name}</h1>
                    <p className='font_8'>{brand}</p>
                    <section className='flex_r price_contaner'>
                        <LabelAmount data={{title: labelOne.title, amount: labelOne.amount, currency: labelOne.currency,  unit: labelOne.unit, edit: false}}/>
                        <LabelAmount data={{title: labelTwo.title, amount: labelTwo.amount, currency: labelTwo.currency,  unit: labelTwo.unit, edit: false}}/>
                    </section>
                    <Counter
                        count={count}
                        setCount={setQuantity}
                    />
                </section>
            </section>
        </article>
    );
};

export default RegularCard;