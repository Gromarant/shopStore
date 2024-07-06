function LabelAmount({title, amount, unit}) {
    return (
        <article>
            <p className='font_6'>{title}</p>
            <section className='flex_r'>
                <h1 className='font_12'>{amount}</h1>
                <p className='font_6'>{unit}</p>
            </section>
        </article>
    )
};

export default LabelAmount;