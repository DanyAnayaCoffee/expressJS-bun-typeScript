import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import path from 'path';
import rootDir from '../utlil/path';

const router = express.Router();

// Render the main shop page where coffees will be listed
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(rootDir, '..', 'views', 'main.html'));
});

export default router;
