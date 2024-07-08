function CheckInput({label}) {
    return (
        <form className='check flex_r'>
            {label ?  
                <label className='label'>
                    {label}
                    <input type='checkbox'/>
                </label>
            : <input className='check' type='checkbox'/>}
        </form>
    );
};

export default CheckInput;