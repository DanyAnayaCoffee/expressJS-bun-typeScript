import express, {type Request, type Response, type NextFunction} from "express";
import path from 'path'
import main from './routes/main'
import users from './routes/users'

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(main);
app.use(users);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });