import { useState } from "react"

const ToDoList = () => {


    const [tasks,setTasks] =useState(['Take a shower','feed the chicken']);
    const [newTask,setNewTasks]= useState("");

    function handleInputChange(event){
        setNewTasks(event.target.vaalue);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t =>[...tasks,newTask]);
            setNewTasks("");
        }
    }

    function deleteTask(index){
        const updatedTasks= tasks.filter((_, i)=> i== index);
        setTasks(updatedTasks);
    }

  return (
    <div className="main-container">
        <h1>TO LIST</h1>
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
                            <button>DELETE</button>
                            <button>☝️</button>
                            <button>👇</button>
                        </li>
                    ))};
                </ol>
                
            </div>
        </div>
    </div>
  )
}

export default ToDoList