import { useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";


function Image({img}) {
    const [favorite, setFavorite] = useState(false);
    const background = {
        backgroundImage: `url(${img})`
    };

    return (
        <div style={background} className='img'>
            {favorite ? 
                <MdOutlineStar className='star' onClick={() => setFavorite(!favorite)}/> 
                : 
                <MdOutlineStarBorder className='star' onClick={() => setFavorite(!favorite)}/>}
        </div>
    );
};

export default Image;