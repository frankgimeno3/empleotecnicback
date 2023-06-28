import mongoose from 'mongoose';

const notificacionSchema = new mongoose.Schema({
  cuentareceptora: { type: String, required: true},
  cuentaemisora: { type: String, required: true },
  visible: { type: Boolean, default: true },
  contenido: { type: String }
});

const Notificacion = mongoose.model('Notificacion', notificacionSchema);

export default Notificacion;