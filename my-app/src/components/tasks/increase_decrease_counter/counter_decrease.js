import { useState } from "react";
import './counter_decrease.css';

export default function CounterDecrease () {
    const [counter, setCounter] = useState(0);

    return (
        <div className="decrease">
            <div>
                <h1>Decrease counter by 1</h1>
            </div>

            <div className="decreaseButtonContainer">
                <button onClick={ () => {
                    setCounter (counter - 1)
                    }}>Decrease
                </button>
                <div className="counter">
                    {counter}
                </div>
                <button onClick={ () => {
                    setCounter (counter + 1)
                    }}>Increase
                </button>
            </div>
        </div>
    )
}
