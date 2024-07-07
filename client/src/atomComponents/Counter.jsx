import { useState } from "react";
import { BsTrash } from "react-icons/bs";

function Counter({count}) {
    let [counter, setCounter] = useState(count);

    const handleCounter = (sign) => {
        if (counter <= 0 && sign === '-') { 
            setCounter(0);
            //delete element from the list
        } else if (sign === '-') { 
            setCounter(counter--); 
        } else { 
            setCounter(counter++); 
        }
    }
    
    return (
        <section className='flex_r counter'>
            <button className='btn unvisible' onClick={() => handleCounter('-')}>{'-'}</button>
            <input className='cart_input' type='number' onChange={e => setCounter(e.target.value)} value={counter}/>
            <button className='btn unvisible' onClick={() => handleCounter('+')}>{'+'}</button> 
            <div className='trash_container'>
                <BsTrash className='trash'/>
            </div>
        </section>
    );
};

export default Counter;