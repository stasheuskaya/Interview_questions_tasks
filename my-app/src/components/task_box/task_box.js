import './task_box.css';

export default function TaskBox (props) {
    return (
        <div className="taskBox">
            {props.content}
        </div>
    )
}