import Notificacion from '../models/notificaciones.model.js';

export const getnotificacions  = async (req, res) => {
  try {
    // Obtener todas las notificaciones de la base de datos
    const notificaciones = await Notificacion.find();

    // Enviar una respuesta al cliente
    res.status(200).json(notificaciones);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener las notificaciones' });
  }
};

export const getnotificacionById   = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar una notificación por su ID en la base de datos
    const notificacion = await Notificacion.findById(id);
    if (!notificacion) {
      return res.status(404).json({ message: 'Notificación no encontrada' });
    }

    // Enviar una respuesta al cliente
    res.status(200).json(notificacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener la notificación' });
  }
};

export const createnotificacion = async (req, res) => {
  try {
    const { cuentareceptora, cuentaemisora, visible, contenido } = req.body;

    // Crear una nueva notificación en la base de datos
    const notificacion = new Notificacion({ cuentareceptora, cuentaemisora, visible, contenido });
    await notificacion.save();

    // Enviar una respuesta al cliente
    res.status(201).json(notificacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al crear la notificación' });
  }
};

export const updatenotificacion = async (req, res) => {
  try {
    const { id } = req.params;
    const { cuentareceptora, cuentaemisora, visible, contenido } = req.body;

    // Buscar una notificación por su ID en la base de datos
    const notificacion = await Notificacion.findById(id);
    if (!notificacion) {
      return res.status(404).json({ message: 'Notificación no encontrada' });
    }

    // Actualizar los campos de la notificación
    notificacion.cuentareceptora = cuentareceptora;
    notificacion.cuentaemisora = cuentaemisora;
    notificacion.visible = visible;
    notificacion.contenido = contenido;

    await notificacion.save();

    // Enviar una respuesta al cliente
    res.status(200).json(notificacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al actualizar la notificación' });
  }
};

export const deletenotificacion = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar una notificación por su ID en la base de datos
    const notificacion = await Notificacion.findById(id);
    if (!notificacion) {
      return res.status(404).json({ message: 'Notificación no encontrada' });
    }

    // Eliminar la notificación de la base de datos
    await notificacion.deleteOne();

    // Enviar una respuesta al cliente
    res.status(200).json(notificacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al eliminar la notificación' });
  }
};