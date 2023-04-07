const ChatMessage = ({ text, role }) => {
    return (
      <div className={`my-2 ${role === 'user' ? 'text-right' : 'text-left'}`}>
        <span className={`inline-block rounded-lg px-3 py-2 ${role === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}>
          {text}
        </span>
      </div>
    );
  };

  export default ChatMessage;
