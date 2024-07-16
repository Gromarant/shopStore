function CheckInput({label, id, handle}) {
    return (
        <div className='check flex_r'>
            {label ?  
                <label className='label'>
                    {label}
                    <input type='checkbox'/>
                </label>
            : <input className='checkbox' id={id} type='checkbox' onChange={(e) => handle(e.target)}/>}
        </div>
    );
};

export default CheckInput;