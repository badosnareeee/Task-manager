const express = require("express")
const router = express.Router()
const  {getAllTask, createTask,getTask,updateTask,deleteTask} = require("../controllers/tasks")

router.get("/",getAllTask)
router.get("/:ID",getTask)
router.post("/",createTask)
router.patch('/:ID',updateTask)
router.delete('/:ID',deleteTask)

module.exports = router