import express from 'express';
import { login } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login); //basically instead of app.use
//login is a controller

export default router;
