import express from 'express';
import type {Request, Response, NextFunction} from 'express';
import path from 'path';
import rootDir from '../utlil/path'

const router = express.Router();

router.get('/', (req: Request, resp: Response, next: NextFunction) => {
    resp.sendFile(path.join(rootDir, '..','views','main.html'));
});

export default router;