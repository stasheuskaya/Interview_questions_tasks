import './main.css';
import Counter from '../tasks/increase_counter/counter';
import CounterDecrease from '../tasks/increase_counter/increase_decrease_counter/counter_decrease';

export default function Main () {
    return (
        <>
            <header>
                
            </header>
            <div className="main">
                <Counter />
                <CounterDecrease />
            </div>
        </>
    )
}