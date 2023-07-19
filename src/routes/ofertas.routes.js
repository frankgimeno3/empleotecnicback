import express from 'express';
import { getOfertas, getOfertaById, createOferta, updateOferta, deleteOferta } from '../controllers/ofertaController.js';
 
import authenticateToken from '../middlewares/authenticateToken.js';

const router = express.Router();

// Rutas para obtener y modificar los datos de los usuarios
// router.get('/', authenticateToken, getofertas);
// router.get('/:id', authenticateToken, getofertaById);
// router.post('/', authenticateToken, createoferta);
// router.patch('/:id', authenticateToken, updateoferta);
// router.delete('/:id', authenticateToken, deleteoferta);

router.get('/', getOfertas);
router.get('/:id', getOfertaById);
router.post('/', createOferta);
router.patch('/:id', updateOferta);
router.delete('/:id', deleteOferta);

export default router;