import { Router } from 'express';
import HelloController from './controllers/hello';

const router = Router();

router.get('/v1', HelloController);

export { router };
