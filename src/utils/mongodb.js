import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    const db = mongoose.connection.db;
    return { db };
  } catch (error) {
    console.log('Failed to connect to MongoDB', error);
    return { error };
  }
}
