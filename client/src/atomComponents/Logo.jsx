function Logo({img}) {
    const background = {
        backgroundImage: `url(${img}) `,
        borderRadius: '50%'
    }
    return (
        <div style={background} className='logo img'></div>
    );
};

export default Logo;