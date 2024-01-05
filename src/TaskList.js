import {useSelector} from 'react-redux';

const TaskList=()=>{
    const todos = useSelector((state) => state);
    return(
        <div>
{todos.map((el)=>
<h1>{el.text}</h1>)}

        </div>
    )
}

export default TaskList