import { useEffect, useState } from "react"
import "./ToDoList.css"
import PropTypes from "prop-types"



const ToDoList = ({fetched_tasks, addTaskMutation}) => {


    const [tasks,setTasks] =useState([]);
    const [newTask,setNewTasks]= useState("");
    const [tasksFetched,setTasksFetched]=useState(false);

    useEffect(() => {
        if (fetched_tasks && !tasksFetched) {
            const fetched_tasksdescription = fetched_tasks.map(fetched_task => fetched_task.description);
            setTasks(prevTasks => [...prevTasks, ...fetched_tasksdescription]);
            setTasksFetched(true);
        }
    }, [fetched_tasks, tasksFetched]);

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            try{
                setTasks(t =>[...t,newTask]);
                addTaskMutation({variables: {description: newTask}});
                setNewTasks("");               
            }
            catch(error){
                console.error(error);
            }

        }
    }

    function deleteTask(index){
        const updatedTasks= tasks.filter((_, i)=> i !== index);
        setTasks(updatedTasks);
    }

    function moveUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

  return (
    <div className="main-container">
        <h1>TODO LIST</h1>
        <div className="content">
            <div className="inputdiv">
                <input type="text" placeholder="Type your list here..."
                value={newTask} onChange={handleInputChange}/>
                <button className="add-button"
                onClick={addTask}>ADD</button>
            </div>
            <div className="lists">
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <p>{task}</p>
                            <button className="delete-button" onClick={()=>deleteTask(index)}>DELETE</button>
                            <button className="move-button" onClick={()=>moveUp(index)}>☝️</button>
                            <button className="move-button" onClick={()=>moveDown(index)}>👇</button>
                        </li>
                    ))}
                </ol>
                
            </div>
        </div>
    </div>
  )
}

ToDoList.propTypes={
    fetched_tasks:PropTypes.array,
    addTaskMutation:PropTypes.func
}

export default ToDoList