import ClearInput from "./ClearInput";

function LabelAmount({data}) {
    const { title, amount, currency,  unit, edit } = data;

    return (
        <article className='amount_label'>
            <p className='font_6'>{title}</p>
            {edit ? <ClearInput validation={{type:'number'}} content={amount}/>
                  :   <section className='flex_r label_amount'>
                        <h1 className='font_12'>{amount + ' ' + currency}</h1>
                        <p className='font_6'>{'/ ' + unit}</p>
                      </section>
            }
        </article>
    );
};

export default LabelAmount;