import Tasks from "../Mongoose/TaskSchema.js";

export const getAllTask = async (req, res) => {
    try {
        const tasks = await Tasks.find(); // Fetch tasks from the database
        res.status(200).json({
            message: "Tasks API is running!",
            status: 200,
            data: tasks // Return the fetched tasks
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Internal Server Error",
            status: 500
        });
    }
}
export const addTask = async (req, res) => {
    try {
        const tasks = await new Tasks(req.body);
        await tasks.save() // Fetch tasks from the database
        res.status(201).json({
            message: "Tasks API is running!",
            status: 200,
            data: tasks // Return the fetched tasks
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Internal Server Error",
            status: 500
        });
    }
}

export const deleteTask = async(req,res)=>{
    try {
      const taskId = req.params.id;
      const task =await Tasks.findByIdAndDelete(taskId);
      if(!task){
          return res.status(404).json({
              message: "Task not found!",
              status: 404
          })
      }
      res.status(200).json({
          message: "Task deleted successfully!",
          status: 200,
          data: task // Return the deleted task
      })
    } catch (error) {
      res.status(500).json({
          message: "Task not deleted!",
          status: 500,
      })
    }
  };


  export const updateTask = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedTask = req.body;
        const taskUpdate = await Tasks.findByIdAndUpdate(id,updatedTask);
        if(!taskUpdate){
            return res.status(404).json({
                message: "Task not found!",
                status: 404
            })
        }
        res.status(201).json({
            message: "Task updated successfully!",
            status: 201,
            data: taskUpdate
        })
    } catch (error) {
        res.status(500).json({
            message: "Task not updated!",
            status: 500,
        })
    }
  }