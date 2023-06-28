import mongoose from 'mongoose';

const notificacionSchema = new mongoose.Schema({
  cuentareceptora: { type: String, required: true, unique: true },
  cuentaemisora: { type: String, required: true },
  visible: { type: Boolean, default: true },
  contenido: { type: String }
  fechaCreacion: { type: Date, default: Date.now }

});

const Notificacion = mongoose.model('Notificacion', notificacionSchema);

export default Notificacion;