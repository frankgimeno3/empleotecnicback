import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import User from '../models/users.model.js';
import cookie from 'cookie';

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si ya existe un usuario con el mismo correo electrónico
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Ya existe un usuario con el mismo correo electrónico' });
    }

    if (!password) {
      return res.status(400).json({ message: 'La contraseña es requerida' });
    }

    // Crear un nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Generar un token de acceso
    const accessToken = jwt.sign({ userId: newUser._id }, config.secretKey);

    // Enviar una respuesta al cliente
    res.status(201).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al registrar el usuario' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el correo electrónico y la contraseña son correctos
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Usuario inválido' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contra inválidas' });
    }

    // Generar un token de acceso
    const accessToken = jwt.sign({ userId: user._id }, config.secretKey);

    // Enviar una respuesta al cliente
    res.status(200)
    .setHeader('Set-Cookie', cookie.serialize('jwt', accessToken, {
      path: '/',
      httpOnly:true
      // exipres:
    }))
      .json({ accessToken })
      ;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al iniciar sesión' });
  }
};