import { useState } from "react";
import './counter_decrease.css';

export default function CounterDecrease () {
    const [counter, setCounter] = useState(0);

    return (
        <div className="decrease">
            <button onClick={ () => {
                setCounter (counter - 1)
                }}>Decrease
            </button>
            <div>
                {counter}
            </div>
            <button onClick={ () => {
                setCounter (counter + 1)
                }}>Increase
            </button>
        </div>
    )
}
