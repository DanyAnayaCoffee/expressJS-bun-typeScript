import express, { type Request, type Response, type NextFunction } from 'express';
import path from 'path';
import main from './routes/main';
import admin from './routes/admin';
import users from './routes/users';

const app = express();

// Serve static assets such as CSS files
app.use(express.static(path.join(__dirname, 'public')));

// Register application routes
app.use(main); // Routes for the shop front
app.use(admin); // Routes for coffee administration
app.use(users); // Existing user-related routes

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
