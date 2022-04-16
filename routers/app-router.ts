import { Router } from 'express';
import { helloWord } from '../controllers/appController';

const router = Router();

router.get('/', helloWord);


export default router;