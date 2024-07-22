import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

function Star ({favorite, toggle}) {
    const Icon = favorite ? MdOutlineStar : MdOutlineStarBorder;

    return(
        <Icon className='star' onClick={toggle}/>
    );
};

export default Star;