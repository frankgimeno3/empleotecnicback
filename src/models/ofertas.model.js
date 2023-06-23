import mongoose from 'mongoose';

const OfertaSchema = new mongoose.Schema({
  cuentaemisora: { type: String, required: true },
// datos descripcion
});

const User = mongoose.model('Oferta', ofertaSchema);

export default Oferta;