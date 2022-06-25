import './task_box.css';

export default function TaskBox (props) {
    return (
        <div bgColor="props.bgColor" 
            className="taskBox">
            {props.content}
        </div>
    )
}