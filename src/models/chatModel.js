// import mongoose from 'mongoose';

// const chatSchema = new mongoose.Schema({
//   userMessage: { type: String, required: true },
//   aiResponse: { type: String, required: true },
//   timestamp: { type: Date, default: Date.now },
// });

// const Chat = mongoose.model('Chat', chatSchema);

// export default Chat;

import mongoose from 'mongoose';

let Chat;

if (mongoose.models.Chat) {
  Chat = mongoose.model('Chat');
} else {
  const chatSchema = new mongoose.Schema({
    userMessage: { type: String, required: true },
    aiResponse: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
  });

  Chat = mongoose.model('Chat', chatSchema);
}

export default Chat;
