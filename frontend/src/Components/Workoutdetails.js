import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
//data fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext'


const Workoutdetails = ({workout}) => {
  const {user}=useAuthContext()
  const {dispatch}= useWorkoutsContext();
  const  handleClick= async ()=>{
    if(!user){
      return
    }
  const response= await fetch( `${process.env.REACT_APP_API_URL}/api/workouts/${workout._id}`,{
    method:"DELETE",
    headers:{
      "authorization":`Bearer ${user.token}`
    }
  })
  const json =await response.json();
  if(response.ok){
    dispatch({type:"DELETE_WORKOUT",payload:json})
  }else{
    console.log(json);
    
  }

 }
  return (
    <div className="workout-details">
  <h4>
    🏋️{" "}
    {workout.title
      ? workout.title.charAt(0).toUpperCase() + workout.title.slice(1)
      : "Untitled"}
  </h4>

  <p>
    <strong>⚡ Load (kg): </strong>
    {workout.load}
  </p>

  <p>
    <strong>🔥 Reps: </strong>
    {workout.reps}
  </p>

  <p>
    <strong>⏱         Created: </strong>
    {workout.createdAt
      ? formatDistanceToNow(new Date(workout.createdAt) , { addSuffix: true })
      : "No time"}
  </p>

  <span onClick={handleClick} className="material-symbols-outlined">
    delete
  </span>
</div>

  )
}

export default Workoutdetails
