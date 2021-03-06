import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
const { log, error } = console;

mongoose.Promise = global.Promise

const port = process.env.PORT || 3000;

const router = express.Router();

//import routes
import userRoutes from './routes/user.route';
import movieRoutes from './routes/movie.route';
import movieRoutes2 from './routes/movie.route2';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



const DB_URL = process.env.MONGO_URL;
const TEST_DB_URL = process.env.MONGO_TEST_URL;

if (process.env.NODE_ENV == "test") {
    mongoose.connect(TEST_DB_URL, { useNewUrlParser: true }, (err) => {
        if (err)
            return log('Unable to Connect to MongoDB')
        return log('Connection Successful to test DB')
    })
} else {
    mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
        if (err)
            return log('Unable to Connect to MongoDB')
        return log('Connection Successful')
    })
}

//middleware to utilize routes
router.use('/user', userRoutes);
router.use('/movie', movieRoutes);
router.use('/movie2', movieRoutes2);

app.use('/api', router);

app.listen(port, () => log('server is running'));
export default app;
