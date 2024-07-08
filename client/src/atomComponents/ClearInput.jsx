import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

function ClearInput({validation, content}) {
    let [count, setCount] = useState(parseFloat(content).toFixed(2));
    const { type,  } = validation;
    
    return (
        <form>
            <div className='input flex_r'>
                <input className='input_content' type={type} onChange={e => setCount(e.target.value)} value={count}/>
                <IoMdCloseCircle className='close' onClick={() => setCount('')}/>
            </div>
        </form>
    );
};

export default ClearInput;