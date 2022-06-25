import './main.css';
import Counter from '../../components/tasks/increase_counter/counter';
import CounterDecrease from '../../components/tasks/increase_decrease_counter/counter_decrease';
// import TaskBox from '../../components/task_box/task_box';
import BitcoinRate from '../../components/tasks/bitcoing_rate/bitcoin_rate';
import RenderJSON from '../../components/tasks/renderJSON/renderJSON';

export default function Main () {
    return (
        <>
            <header>
            </header>
            <div className="main">
                <div className='sectionBlue'>
                    <Counter />
                </div>
                <div className='sectionWhite'>
                    <CounterDecrease />
                </div>
                <div className='sectionBlue'>
                    <BitcoinRate />
                </div>
                <div className='sectionWhite'>
                    <RenderJSON />
                </div>
            </div>
        </>
    )
}