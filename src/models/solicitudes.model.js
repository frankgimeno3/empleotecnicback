import mongoose from 'mongoose';

const solicitudSchema = new mongoose.Schema({
  cuentaemisora: { type: String, required: true },
// datos descripcion
});

const User = mongoose.model('Solicitud', solicitudSchema);

export default Solicitud;