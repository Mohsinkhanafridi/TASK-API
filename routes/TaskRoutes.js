import express from "express";
import {addTask,deleteTask,getAllTask,updateTask} from "../controllers/TaskController.js";

 const TaskRoutes = express.Router();

TaskRoutes.get("/", getAllTask);
TaskRoutes.post("/add", addTask);
TaskRoutes.delete("/delete/:id", deleteTask);
TaskRoutes.put("/update/:id", updateTask);
 
export default TaskRoutes;