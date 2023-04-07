import { connectToDatabase } from '../../src/utils/mongodb';
import Chat from '../../src/models/chatModel';

connectToDatabase();

export default async function handler(req, res) {
  try {
    const chatHistory = await Chat.find();
    res.status(200).json({ chatHistory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve chat history.' });
  }
}
