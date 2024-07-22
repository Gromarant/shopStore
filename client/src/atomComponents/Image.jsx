function Image({img, children}) {
    const background = {
        backgroundImage: `url(${img})`
    };


    return (
        <div style={background} className='img'>
            {children}
        </div>
    );
};


export default Image;