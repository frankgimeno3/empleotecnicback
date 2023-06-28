import Notificacion from '../models/notificaciones.model.js';


export const getnotificacions = async (req, res) => {
  try {
    // Obtener todos los notificacions de la base de datos
    const notificaciones = await Notificacion.find();

    // Enviar una respuesta al cliente
    res.status(200).json(notificaciones);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener los notificacions' });
  }
};

// export const getnotificacionById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Buscar un notificacion por su ID en la base de datos
//     const notificacion = await notificacion.findById(id);
//     if (!notificacion) {
//       return res.status(404).json({ message: 'notificacion no encontrada' });
//     }

//     // Enviar una respuesta al cliente
//     res.status(200).json(notificacion);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Ha ocurrido un error al obtener el notificacion' });
//   }
// };

// export const createnotificacion = async (req, res) => {
//   try {
//     const {cuentareceptora, cuentaemisora, visible, contenido, fechaCreacion} = req.body;

//     // Crear un nuevo notificacion en la base de datos
//     const notificacion = new notificacion({cuentareceptora, cuentaemisora, visible, contenido, fechaCreacion});
//     await notificacion.save();

//     // Enviar una respuesta al cliente
//     res.status(201).json(notificacion);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Ha ocurrido un error al crear el notificacion' });
//   }
// };

// export const updatenotificacion = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email, password } = req.body;

//     // Buscar un notificacion por su ID en la base de datos
//     const notificacion = await notificacion.findById(id);
//     if (!notificacion) {
//       return res.status(404).json({ message: 'notificacion no encontrado' });
//     }

//     // Actualizar el correo electrónico y la contraseña del notificacion
//     if (email) notificacion.email = email;
//     if (password) notificacion.password = await bcrypt.hash(password, 10);
//     await notificacion.save();

//     // Enviar una respuesta al cliente
//     res.status(200).json(notificacion);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Ha ocurrido un error al actualizar el notificacion' });
//   }
// };

// export const deletenotificacion = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Buscar un notificacion por su ID en la base de datos
//     const notificacion = await notificacion.findById(id);
//     if (!notificacion) {
//       return res.status(404).json({ message: 'notificacion no encontrado' });
//     }

//     // Eliminar el notificacion de la base de datos
//     await notificacion.deleteOne();

//     // Enviar una respuesta al cliente
//     res.status(200).json(notificacion);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Ha ocurrido un error al eliminar el notificacion' });
//   }
// };