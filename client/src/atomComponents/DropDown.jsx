import { useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";

function DropDown({content}) {
    const [display, setDisplay] = useState(false);
    const {label, length, cards} = content;
    
    return (
        <>
            <button className='dropDownLabel' onClick={() => cards ?  setDisplay(!display) : null}>
                {`${label} (${length})`}
                <MdArrowDropDownCircle className={display ? 'arrow up' : 'arrow down'}/>
            </button>
            { cards  
            ?    <section className={display ? 'container' : 'hidden'}>
                    {cards}
                </section> 
            :   null}
        </>
    );
};

export default DropDown;