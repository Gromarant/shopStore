import EditBtn from "./EditBtn";
import Input from "./CheckInput";
import Logo from "./Logo";

function Header({type, logo}) {
    return (
        <header className='header'>
            <Logo img={logo}/>
            {type === 'edit' 
                ? <EditBtn/> 
                : type === 'check' ? <Input/> : null
            }
        </header>
    )
};

export default Header;