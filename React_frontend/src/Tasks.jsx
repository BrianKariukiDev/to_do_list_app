import { gql, useQuery } from "@apollo/client"
import ToDoList from "./Todolist/ToDoList";

    const GET_TASKS=gql `
        {
            tasks{
                    id,description
            }
        }
    `

const Tasks = () => {
    
    const {error,loading,data}=useQuery(GET_TASKS);
    console.log(error,loading,data);

        if(loading){
            return (
            <div style={{background: 'red'}}> Wait for sometime while the data is retrieving.................</div>
        )};
        if(error){
            return(
            <span style={{color:'red'}}>An error occurred, check later as the issue is being sorted out. Thanks for your patience</span>
       ) };
       if(data){
        return(
            <>
                <ToDoList fetched_tasks={data.tasks}/>
            </>
        );
    }

}

export default Tasks