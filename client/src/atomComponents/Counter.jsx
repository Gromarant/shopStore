import { BsTrash } from "react-icons/bs";

function Counter({ count, setCount }) {


    return (
        <section className='flex_r counter'>
            <button className='btn unvisible' onClick={() => setCount(count <= 0 ? 0 : count - 1)}>{'-'}</button>
            <input className='input' type='number' onChange={e => setCount(e.target.value)} value={count}/>
            <button className='btn unvisible' onClick={() => setCount(count + 1)}>{'+'}</button> 
            <div className='trash_container'>
                <BsTrash className='trash' onClick={() => setCount(0)}/>
            </div>
        </section>
    );
};

export default Counter;