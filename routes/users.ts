import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import path from 'path';
import rootDir from '../utlil/path';

const router = express.Router();

// Render a placeholder users page
router.get('/users', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(rootDir, '..', 'views', 'users.html'));
});

export default router;
