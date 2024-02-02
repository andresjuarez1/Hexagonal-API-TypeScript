import mongoose from 'mongoose';

async function connect() {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error('La variable de entorno MONGO_URI no está definida.');
        }

        await mongoose.connect(mongoURI);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
}

export { connect };