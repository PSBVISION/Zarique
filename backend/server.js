import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';

// App Config
const app = express();
const port = process.env.PORT || 5000;

// Middlewares - must be before routes
app.use(cors());
app.use(express.json());

//connections
connectDB();
connectCloudinary();

//api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
  res.send('Api is working')
});

app.listen(port, () => {
  console.log(`Listening at http://localhost: ${port}`);
})