import { BsTrash } from "react-icons/bs";

function Counter({count}) {
    return (
        <section className='flex_r counter'>
            <button className='btn unvisible'>{'-'}</button>
            <p>{count}</p> 
            <button className='btn unvisible'>{'+'}</button> 
            <div className='trash_container'>
                <BsTrash className='trash'/>
            </div>
        </section>
    );
};

export default Counter;