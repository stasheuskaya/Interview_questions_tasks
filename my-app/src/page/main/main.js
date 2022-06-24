import './main.css';
import Counter from '../../components/tasks/increase_counter/counter';
import CounterDecrease from '../../components/tasks/increase_decrease_counter/counter_decrease';
// import TaskBox from '../../components/task_box/task_box';
import BitcoinRate from '../../components/bitcoing_rate/bitcoin_rate';

export default function Main () {
    return (
        <>
            <header>
            </header>
            <div className="main">
                {/* <TaskBox content={<Counter />}/> */}
                <Counter />
                <CounterDecrease />
                <BitcoinRate />
            </div>
        </>
    )
}