import { useAuthContext } from "./useAuthContext"
import {useWorkoutsContext} from "./useWorkoutsContext"
export const useLogout=()=>{

    
    const {dispatch}=useAuthContext()
    const {dispatch:workoutsdispatch}=useWorkoutsContext()
    
    

    const logout=()=>{
    
        // remove user  from local Storage
        localStorage.removeItem('user')
        // dispatch logout action  
        dispatch({type:'LOGOUT'})
        workoutsdispatch({type:'SET_WORKOUT',payload:null})




    }
    return {logout}
 
}