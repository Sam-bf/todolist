import {useSelector} from 'react-redux';

const TaskList=()=>{
    const todos = useSelector((state) => state);
    console.log(todos)
    return(
        <div>

{todos.map((el)=>(
    <>
    <h1>{el.text}</h1>
    <button>Remove</button>
    </>
))}
        </div>
    )
}

export default TaskList