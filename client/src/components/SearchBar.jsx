import { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";

function SearchBar({show}) {
    const [inputValue, setInputValue] = useState('');

    return (
        <form className={show ? 'searchBarstatus' : 'hidden' }>
            <div className='input flex_r'>
                <input className='input_content' type='text' onChange={e => setInputValue(e.target.value)} value={inputValue}/>
                <IoMdCloseCircle className='close' onClick={() => setInputValue('')}/>
            </div>
        </form>
    );
};

export default SearchBar;