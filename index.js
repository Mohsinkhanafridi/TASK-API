import express from 'express';
import dotenv from 'dotenv';
import mongoose from'mongoose';
import  TaskRoutes  from './routes/TaskRoutes.js';
import cors from 'cors';
const app = express();
dotenv.config();
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });
app.use(cors());
app.use(express.json());
app.use("/task",TaskRoutes);
const MONGODB_URI = process.env.MONGODB_URI;

const dbConnection = async()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
}
dbConnection();

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`);
})