import express, { Application } from 'express';
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config();
const app: Application = express();
const port: number = Number(process.env.PORT) || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//import router
import appRouter from './routers/app-router';


//Routes
app.use('/', appRouter);
// app.use('/users', usersRouter);
// app.use('/products', productsRouter);



app.listen(port, () => console.log('server on port ' + port)) 