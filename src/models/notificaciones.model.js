import mongoose from 'mongoose';

const notificacionSchema = new mongoose.Schema({
  cuentareceptora: { type: String, required: true, unique: true },
  cuentaemisora: { type: String, required: true },
// visible es booleana inicializada en true
// timestamps creacion
// timestamps desde que se ocultó (sirve para un historial), se borran cuando llegan a x tiempo
// contenido en textp
});

const User = mongoose.model('Notificacion', notificacionSchema);

export default Notificacion;