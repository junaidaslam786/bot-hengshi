import { generateResponse } from '../../src/utils/openai';
import { connectToDatabase } from '../../src/utils/mongodb';
import Chat from '../../src/models/chatModel';

connectToDatabase();

export default async function handler(req, res) {
  const { message } = req.body;

  const response = await generateResponse(message);

  // const chat = new Chat({ userMessage: message, aiResponse: response });
  // await chat.save();

  res.status(200).json({ response });
}
