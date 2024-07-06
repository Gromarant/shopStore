function Header({type, logo}) {
    const background = {
        backgroundImage: `url(${logo}) `,
        borderRadius: '50%'
    }
    return (
        <header className='flex_r header_cart'>
            <div style={background} className='logo_store back_img'></div>
            {type === 'edit' ? 
                <div>
                    <div className='edit'></div>
                </div> : null}
            {type === 'check' ? <div className='check'><input type='checkbox' name="addToList"/></div> : null}
        </header>
    )
};

export default Header;