const WorkOut=require('../Models/workoutModel')
const mongoose=require('mongoose')

//get all workouts
module.exports.getAllWorkout=async(req,res)=>{
    const user_id=req.user._id
    const workout= await WorkOut.find({user_id}).sort({createdAt:-1})
    if(!workout){
        return res.status(400).json({error:"No entries found"})
    }
    res.status(200).json(workout)

}
// get workout by its
module.exports.getWorkoutById=async(req,res)=>{
    const {id} =req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({error:` no such workout found by Id: ${id}`})
    
    const workout= await WorkOut.findById(id)
    if(!workout)
    return res.status(404).json({error:`workout not found by Id: ${id}`})

    res.status(200).json(workout)

}
// create workout
module.exports.createWorkOut=async(req,res)=>{
    
    const {title,load,reps}=req.body;
    

    let emptyFileds=[];
    if(!title)
        emptyFileds.push('title')
    if(!load)
        emptyFileds.push('load')
    if(!reps)
        emptyFileds.push('reps')
    if(emptyFileds.length>0)
        return res.status(400).json({error:"Please fill out  all mandatory field !",emptyFileds})

    try{
    const user_id=req.user._id
    const workout=await WorkOut.create({title,load,reps,user_id })
    res.status(200).json(workout)

    }catch(error){
    res.status(400).json({error: error.message})

    }
}
// deleate a workout by its ID
module.exports.deleteWorkoutById=async(req,res)=>{
const{id}=req.params;
if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({error:` no such workout found by Id: ${id}`})

const workout=await WorkOut.findByIdAndDelete(id)
if(!workout)
    return res.status(404).json({ error: `Workout not found for id: ${id}` });
  

res.status(200).json(workout)
}
// update a workout by its ID
module.exports.updateWorkoutById=async(req,res)=>{
const {id}=req.params
if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({error:` no such workout found by Id: ${id}`})

const workout=await WorkOut.findOneAndUpdate(
    {
    _id:id},
    {
    ...req.body},
    {
    new:true
}
)
    

res.status(200).json(workout)

}
