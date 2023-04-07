import ChatMessage from '../components/ChatMessage';
import { connectToDatabase } from '../src/utils/mongodb';

const History = ({ chatHistory }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        {chatHistory.length === 0 ? (
          <p className="text-gray-400">No chat history yet.</p>
        ) : (
          chatHistory.map((message, index) => (
            <ChatMessage key={index} role={message.role} text={message.text} />
          ))
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
    const { db, error } = await connectToDatabase();

    if (error) {
      console.log('Failed to connect to MongoDB', error);
      return { props: { chatHistory: [] } };
    }

    const chatHistory = await db.collection('chat_history').find().toArray();

    return {
      props: {
        chatHistory: JSON.parse(JSON.stringify(chatHistory)),
      },
    };
  }


export default History;
