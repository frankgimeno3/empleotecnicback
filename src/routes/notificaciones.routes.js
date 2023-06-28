import express from 'express';
import { getnotificacions } from '../controllers/notificacionController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y modificar los datos de los usuarios
// router.get('/', authenticateToken, getnotificacions);
// router.get('/:id', authenticateToken, getnotificacionById);
// router.post('/', authenticateToken, createnotificacion);
// router.patch('/:id', authenticateToken, updatenotificacion);
// router.delete('/:id', authenticateToken, deletenotificacion);

router.get('/', getnotificacions);
// router.get('/:id', getnotificacionById);
// router.post('/', createnotificacion);
// router.patch('/:id', updatenotificacion);
// router.delete('/:id', deletenotificacion);

export default router;