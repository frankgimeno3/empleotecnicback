import express from 'express';
import { getofertas } from '../controllers/ofertaController.js';
import authenticateToken from '../middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y modificar los datos de los usuarios
// router.get('/', authenticateToken, getofertas);
// router.get('/:id', authenticateToken, getofertaById);
// router.post('/', authenticateToken, createoferta);
// router.patch('/:id', authenticateToken, updateoferta);
// router.delete('/:id', authenticateToken, deleteoferta);

router.get('/', getofertas);
router.get('/:id', getofertaById);
router.post('/', createoferta);
router.patch('/:id', updateoferta);
router.delete('/:id', deleteoferta);

export default router;