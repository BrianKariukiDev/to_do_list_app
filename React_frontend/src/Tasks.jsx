import { gql, useMutation, useQuery } from "@apollo/client"
import ToDoList from "./Todolist/ToDoList";

    const GET_TASKS=gql `
        {
            tasks{
                    id,description
            }
        }
    `

    const ADD_TASK=gql `
        mutation AddTask($description: String!){
            addTask(description: $description){
                id
                description
                created_at
                updated_at
            }
        }
    `

const Tasks = () => {
    
    const {error,loading,data}=useQuery(GET_TASKS);
    const [addTaskMutation]=useMutation(ADD_TASK);

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
                <ToDoList fetched_tasks={data.tasks} addTaskMutation={addTaskMutation}/>
            </>
        );
    }

}

export default Tasks