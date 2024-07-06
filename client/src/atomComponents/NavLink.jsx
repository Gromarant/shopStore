import { Link } from 'react-router-dom';

function NavLink({path, text, state, handle}) {

    return (
        <li>
            <Link to={path} onClick={handle}>
                <div className={`icon_div ${state === path ? 'active' : '' }`}></div>
                {text}
            </Link>
        </li>
    )
};

export default NavLink;