import { gql, useQuery } from "@apollo/client"

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
    
  return (
    <div>

    </div>
  )
}

export default Tasks