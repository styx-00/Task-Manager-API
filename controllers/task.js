const getAllTasks = (req,res)=>{
    console.log("In route")
    res.send('all items')
}
const createTask = (req,res)=>{
    res.send('create task');
}
const getTask = (req,res)=>{
    res.json({id:req.params.id});
}
const updateTask = (req,res)=>{
    res.send('update task');
}
const deleteTask = (req,res)=>{
    res.send('delete task');
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}