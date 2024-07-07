import { FaListUl } from "react-icons/fa6";
import { MdOutlineKitchen, MdOutlineShoppingCart  } from "react-icons/md";
import { TbCirclePercentage } from "react-icons/tb";

const navLinks = [
    { path: '/bill', text: 'Bills', icon: <FaListUl className='icon'/> },
    { path: '/pantry', text: 'Pantry', icon: <MdOutlineKitchen className='icon'/> },
    { path: '/sale', text: 'On sale', icon: <TbCirclePercentage className='icon'/> },
    { path: '/list', text: 'Shopping list', icon: <MdOutlineShoppingCart className='icon'/> },
];

export default navLinks;