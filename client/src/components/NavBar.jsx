import { useState } from 'react';
import '../index.css';
import NavLink from '../atomComponents/NavLink';
import navLinks from '../utils/navigation';

function NavBar () {
    const [active, setActive] = useState(window.location.href.split(`${window.location.origin}`)[1]);
    const handleActiveBtn = (link) => setActive(link);


    return (
        <nav>
            <ul className='navBar'>
                {navLinks?.map(link => <NavLink path={link.path} text={link.text} state={active} icon={link.icon} handle={() => handleActiveBtn(link.path)} key={link.path}/>)}
            </ul>
        </nav>
    )
};

export default NavBar;