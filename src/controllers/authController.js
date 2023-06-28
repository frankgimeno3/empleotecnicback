import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config.js";
import User from "../models/users.model.js";
import cookie from "cookie";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({
          message: "Ya existe un usuario con el mismo correo electrónico",
        });
    }
    if (!password) {
      return res.status(400).json({ message: "La contraseña es requerida" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    const accessToken = jwt.sign({ userId: newUser._id }, config.secretKey);
    res.status(201).json({ accessToken });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ha ocurrido un error al registrar el usuario" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Usuario inválido" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contra inválidas" });
    }
    const accessToken = jwt.sign({         
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      userId: user._id }, 
      config.secretKey);

    res
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", accessToken, {
          httpOnly: true,
        }))          
      .json({ accessToken })
    return res.json('login succesfully  ')
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ha ocurrido un error al iniciar sesión" });
  }
};
