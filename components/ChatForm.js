import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSpinner } from 'react-icons/fa';

const ChatForm = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: currentMessage }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { response: aiResponse } = await response.json();
    setMessages((messages) => [...messages, { text: currentMessage, role: 'user' }, { text: aiResponse, role: 'assistant' }]);
    setCurrentMessage('');
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchChatHistory = async () => {
      setIsLoading(true);
      const response = await fetch('/api/chat-history');
      const chatHistory = await response.json();
      setMessages(chatHistory);
      setIsLoading(false);
    };

    fetchChatHistory();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-24">
            <FaSpinner className="animate-spin h-5 w-5 mr-3" />
            <span>Loading chat history...</span>
          </div>
        ) : messages.length === 0 ? (
          <p className="text-gray-400">No chat history yet.</p>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`my-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block rounded-lg px-3 py-2 ${message.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}>
                {message.text}
              </span>
            </div>
          ))
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 border-2 border-gray-300 py-2 px-4 rounded-lg mr-4"
            placeholder="Type your message here..."
            value={currentMessage}
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-lg">
            {isLoading ? <FaSpinner className="animate-spin h-5 w-5" /> : 'Send'}
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <Link href="/new-chat" passHref>
          <button className="text-indigo-500 underline">Start a new chat</button>
        </Link>
      </div>
    </div>
  );
};

export default ChatForm;
