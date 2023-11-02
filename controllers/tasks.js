const Task = require ("../Models/task")


const getAllTask = async (req,res) => {
   try {
    const task = await Task.find({})
    res.status(200).json({task})
   } catch (error) {
    res.status(500).json({msg:error})
   }

}
const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json({task})
    } catch (error) {
        res.status(200).json({msg:error})
        
    }
}
const getTask = async (req,res) => {
   try {
    const {ID:taskID} = req.params
    const task = await Task.findOne ({_id:taskID})
    if(!task){
        return res.status(404).json({msg:`No task found with id: ${taskID}`})
    }
    res.status(200).json({task});
    
   } catch (error) {
    res.status(500).json({msg:error})
    
   }
}
const updateTask = async (req,res) => {
    try {
        const {ID:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new:true,
            runValidators:true
    
        })
        if(!task){
            return res.status(404).json({msg:`No task found with id: ${taskID}`})
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const deleteTask = async(req,res) => {
   try {
    const {ID:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID});
    if(!task){
        return res.status(404).json({msg:`No task found with id: ${taskID}`})
    }
    return res.status(200).json({msg:`Task deleted : ${taskID}`})
   } catch (error) {
    res.status(500).json({msg:error});
   }

}
    

module.exports = {getAllTask,createTask,getTask,updateTask,deleteTask}