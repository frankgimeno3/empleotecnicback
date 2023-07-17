import mongoose from 'mongoose';

const ofertaSchema = new mongoose.Schema({
  cuentaemisora: { type: String, required: true },
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  nombreEmpresa: { type: String, required: true },

  sector: { type: String, required: true },
  ubicacion: { type: String, required: true },
  tipoempleo: { type: String, required: true },
  jornada: { type: String, required: true },

  salariohora: { type: String, required: true },
  diaslaborables: { type: String, required: true },
  beneficios: { type: String, },
  requisitosadicionales: { type: String, },
});

const Oferta = mongoose.model('Oferta', ofertaSchema);

export default Oferta;