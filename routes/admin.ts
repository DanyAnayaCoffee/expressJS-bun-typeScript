import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import path from 'path';
import rootDir from '../utlil/path';

const router = express.Router();

// Serve the form that allows administrators to add a new coffee
router.get('/admin/add-coffee', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(rootDir, '..', 'views', 'add-coffee.html'));
});

export default router;
