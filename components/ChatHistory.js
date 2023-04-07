import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const ChatHistory = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full overflow-auto p-4">
      {messages?.map((message) => (
        <ChatMessage key={message._id} message={message} />
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;
