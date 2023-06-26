// src/routes/authRoutes.js
import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

// Rutas para registrarse e iniciar sesión
router.post('/register', register);
router.post('/login', login);
router.post('/auth/logout', (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Sesión cerrada' });
  });
  
export default router;