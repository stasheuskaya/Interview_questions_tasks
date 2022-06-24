import './main.css';
import Counter from '../../components/tasks/increase_counter/counter';
import CounterDecrease from '../../components/tasks/increase_decrease_counter/counter_decrease';
// import TaskBox from '../../components/task_box/task_box';
import BitcoinPrice from '../../components/bitcoing_API/bitcoin_API';

export default function Main () {
    return (
        <>
            <header>
            </header>
            <div className="main">
                {/* <TaskBox content={<Counter />}/> */}
                <Counter />
                <CounterDecrease />
                <BitcoinPrice />
            </div>
        </>
    )
}