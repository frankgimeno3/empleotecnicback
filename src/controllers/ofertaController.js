import Oferta from '../models/ofertas.model.js';

export const getOfertas = async (req, res) => {
  try {
    // Obtener todas las ofertas de la base de datos
    const ofertas = await Oferta.find();

    // Enviar una respuesta al cliente
    res.status(200).json(ofertas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener las ofertas' });
  }
};

export const getOfertaById = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar una oferta por su ID en la base de datos
    const oferta = await Oferta.findById(id);
    if (!oferta) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }

    // Enviar una respuesta al cliente
    res.status(200).json(oferta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener la oferta' });
  }
};

export const createOferta = async (req, res) => {
  try {
    const {
      cuentaemisora,
      titulo,
      descripcion,
      nombreEmpresa,
      sector,
      ubicacion,
      tipoempleo,
      jornada,
      salariohora,
      diaslaborables,
      beneficios,
      requisitosadicionales,
    } = req.body;

    // Crear una nueva oferta en la base de datos
    const oferta = new Oferta({
      cuentaemisora,
      titulo,
      descripcion,
      nombreEmpresa,
      sector,
      ubicacion,
      tipoempleo,
      jornada,
      salariohora,
      diaslaborables,
      beneficios,
      requisitosadicionales,
    });
    await oferta.save();

    // Enviar una respuesta al cliente
    res.status(201).json(oferta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al crear la oferta' });
  }
};

export const updateOferta = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Buscar una oferta por su ID en la base de datos
    const oferta = await Oferta.findById(id);
    if (!oferta) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }

    // Actualizar la oferta con los nuevos datos
    await Oferta.findByIdAndUpdate(id, updateData, { new: true });

    // Enviar una respuesta al cliente con la oferta actualizada
    res.status(200).json(updateData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al actualizar la oferta' });
  }
};

export const deleteOferta = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar una oferta por su ID en la base de datos
    const oferta = await Oferta.findById(id);
    if (!oferta) {
      return res.status(404).json({ message: 'Oferta no encontrada' });
    }

    // Eliminar la oferta de la base de datos
    await Oferta.findByIdAndRemove(id);

    // Enviar una respuesta al cliente con la oferta eliminada
    res.status(200).json(oferta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al eliminar la oferta' });
  }
};