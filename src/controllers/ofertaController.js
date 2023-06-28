import oferta from '../models/ofertas.model.js';


export const getofertas = async (req, res) => {
  try {
    // Obtener todos los ofertas de la base de datos
    const ofertas = await oferta.find();

    // Enviar una respuesta al cliente
    res.status(200).json(ofertas);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ha ocurrido un error al obtener los ofertas' });
  }
};

// export const getofertaById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Buscar un oferta por su ID en la base de datos
//     const oferta = await oferta.findById(id);
//     if (!oferta) {
//       return res.status(404).json({ message: 'oferta no encontrada' });
//     }

//     // Enviar una respuesta al cliente
//     res.status(200).json(oferta);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Ha ocurrido un error al obtener el oferta' });
//   }
// };

// export const createoferta = async (req, res) => {
//   try {
//     const {cuentareceptora, cuentaemisora, visible, contenido, fechaCreacion} = req.body;

//     // Crear un nuevo oferta en la base de datos
//     const oferta = new oferta({cuentareceptora, cuentaemisora, visible, contenido, fechaCreacion});
//     await oferta.save();

//     // Enviar una respuesta al cliente
//     res.status(201).json(oferta);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Ha ocurrido un error al crear el oferta' });
//   }
// };

// export const updateoferta = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email, password } = req.body;

//     // Buscar un oferta por su ID en la base de datos
//     const oferta = await oferta.findById(id);
//     if (!oferta) {
//       return res.status(404).json({ message: 'oferta no encontrado' });
//     }

//     // Actualizar el correo electrónico y la contraseña del oferta
//     if (email) oferta.email = email;
//     if (password) oferta.password = await bcrypt.hash(password, 10);
//     await oferta.save();

//     // Enviar una respuesta al cliente
//     res.status(200).json(oferta);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Ha ocurrido un error al actualizar el oferta' });
//   }
// };

// export const deleteoferta = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Buscar un oferta por su ID en la base de datos
//     const oferta = await oferta.findById(id);
//     if (!oferta) {
//       return res.status(404).json({ message: 'oferta no encontrado' });
//     }

//     // Eliminar el oferta de la base de datos
//     await oferta.deleteOne();

//     // Enviar una respuesta al cliente
//     res.status(200).json(oferta);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Ha ocurrido un error al eliminar el oferta' });
//   }
// };