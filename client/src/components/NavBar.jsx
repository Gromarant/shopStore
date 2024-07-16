import { useState } from 'react';
import '../index.css';
import NavLink from '../atomComponents/NavLink';
import { FaListUl } from "react-icons/fa6";
import { MdOutlineKitchen, MdOutlineShoppingCart  } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";

const navLinks = [
    { path: '/bill', text: 'Bills', icon: <FaListUl className='icon'/> },
    { path: '/pantry', text: 'Pantry', icon: <MdOutlineKitchen className='icon'/> },
    { path: '/sale', text: 'On sale', icon: <TbCirclePercentage className='icon'/> },
    { path: '/list', text: 'Shopping list', icon: <MdOutlineShoppingCart className='icon'/> },
];

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