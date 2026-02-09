import { useContext } from "react"
import { WorkoutContext } from "../Context/WorkoutContext"
export const useWorkoutsContext=()=>{
    const context=useContext(WorkoutContext)
    if(!context){
        throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider ')
    }

    return context


}