import { Router } from 'express';
import { login } from './services/auth';

export const router = Router();

router.use('auth', async (req, res) => {
  const { email, password } = req.body;
  const user = await login({ email, password });
  res.status(200).json(user);
});