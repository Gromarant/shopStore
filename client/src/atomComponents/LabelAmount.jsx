import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

function LabelAmount({title, amount, currency,  unit, edit}) {
    let [count, setCount] = useState(parseFloat(amount).toFixed(2));

    return (
        <article>
            <p className='font_6'>{title}</p>
            {edit ? <form className='input flex_r'>
                        <input className='price_input' type='number' onChange={e => setCount(e.target.value)} value={count}/>
                        <IoMdCloseCircle className='close' onClick={() => setCount(0)}/>
                    </form>
                  :   <section className='flex_r label_amount'>
                        <h1 className='font_12'>{amount + currency}</h1>
                        <p className='font_6'>{unit}</p>
                      </section>
            }
        </article>
    );
};

export default LabelAmount;