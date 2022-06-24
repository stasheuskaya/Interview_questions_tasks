import { useState } from "react";
import './counter.css';

export default function Counter () {
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <div className="counterContainer">
                <h1>Increase counter by 1</h1>
                <div className='counter'>
                    {counter}
                </div>
                <button onClick={() => {
                    setCounter (counter + 1) }}>
                    Increment number by one
                </button>
                <button onClick={ () => {
                    setCounter(0)
                }}>Reset</button>
            </div>
        </div>
    )
}
