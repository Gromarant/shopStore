import { MdOutlineEdit } from "react-icons/md";
import Logo from "./Logo";

function Header({type, logo}) {
    return (
        <header className='header'>
            <Logo img={logo}/>
            {type === 'edit' ? 
                <div className='edit'>
                    <MdOutlineEdit className='icon'/>
                </div> : null}
            {type === 'check' ? <div className='check'><input type='checkbox' name="addToList"/></div> : null}
        </header>
    )
};

export default Header;