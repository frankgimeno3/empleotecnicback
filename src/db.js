import mongoose from 'mongoose';
import config from './config.js';

const connectDB = async () => {
  mongoose
  .connect('mongodb://127.0.0.1:27017/Empleotecnic')
  .then(x => console.log(`Connected the Database: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

  
  try {
    // Crear conexión a MongoDB utilizando la URI de configuración
    const connection = await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Manejador de evento 'connected' para indicar la conexión exitosa a MongoDB
    connection.connection.on('connected', () => {
      console.log('Conexión exitosa a MongoDB');
    });

    // Manejador de evento 'error' para capturar errores en la conexión a MongoDB
    connection.connection.on('error', (error) => {
      console.error(`Error al conectar con MongoDB: ${error.message}`);
    });

    // Manejador de evento 'disconnected' para indicar la desconexión de MongoDB
    connection.connection.on('disconnected', () => {
      console.log('Desconexión de MongoDB');
    });

    // Manejador de evento 'reconnected' para indicar la reconexión a MongoDB
    connection.connection.on('reconnected', () => {
      console.log('Reconexión exitosa a MongoDB');
    });

  } catch (error) {
    console.error(`Error al conectar con MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;