import { Link } from 'react-router-dom';

function NavLink({path, text, state, icon, handle}) {
    return (
        <li>
            <Link to={path} onClick={handle}>
                <div className={`icon_div ${state === path ? 'active' : '' }`}>{icon}</div>
                {text}
            </Link>
        </li>
    )
};

export default NavLink;