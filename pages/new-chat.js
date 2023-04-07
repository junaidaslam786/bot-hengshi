import { useState } from 'react';

const NewChat = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to submit new chat message.');
    } else {
      setMessage('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">New Chat</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full rounded-lg border border-gray-400 p-2 mb-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default NewChat;
