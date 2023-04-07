import axios from 'axios';
import Chat from '../models/chatModel';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${OPENAI_API_KEY}`,
};

export async function saveChat(userMessage, aiResponse) {
  if (!userMessage || !aiResponse) {
    throw new Error('userMessage or aiResponse is undefined or null');
  }

  const chat = new Chat({ userMessage, aiResponse });
  await chat.save();
}

export async function generateResponse(userMessage) {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `${userMessage}` }],
    },
    { headers }
  );

  console.log(response.data);

  const choices = response.data.choices;
  if (!choices || choices.length === 0) {
    throw new Error('No choices found in OpenAI response');
  }

  const choice = choices[0];
  if (!choice.message || !choice.message.content) {
    throw new Error('No content found in first choice of OpenAI response');
  }

  const aiResponse = choice.message.content.trim();

  await saveChat(userMessage, aiResponse);

  return aiResponse;
}
