import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/', (req, res) => {
    res.send('Server is ready');
})
app.use("/api/users", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})