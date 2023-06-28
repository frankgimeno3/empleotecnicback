// app.js
import express from 'express';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import notificationRoutes from './routes/notificaciones.routes.js';
import ofertasRoutes from './routes/ofertas.routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
// Configurar middlewares
app.use(express.json());

// Configurar rutas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/notificaciones', notificationRoutes);
app.use('/ofertas', ofertasRoutes);

export default app 