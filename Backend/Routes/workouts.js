const express=require('express')
const requireAuth = require('../Middleware/requireAuth');
const router=express.Router();
const WorkOut=require('../Models/workoutModel');

// require for all workout Required
router.use(requireAuth)


const { createWorkOut, updateWorkoutById, deleteWorkoutById, getWorkoutById, getAllWorkout } = require('../Controller/workoutController');

router.get("/",getAllWorkout)
router.get("/:id",getWorkoutById)
router.post("/",createWorkOut)
router.delete('/:id',deleteWorkoutById)
router.patch('/:id',updateWorkoutById)
module.exports=router;
