import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    due_date:{
        type: Date,
        required: true
    }
},{timestamps: true});

const Tasks = mongoose.model("Tasks", TaskSchema);

export default Tasks;