export default function ChatMessage({ message }) {
    return (
      <div className="mb-4 p-4 bg-gray-50 rounded-lg">
        <strong>{message.username}</strong> <span className="text-gray-500 text-sm">{new Date(message.timestamp).toLocaleString()}</span>
        <p>{message.content}</p>
      </div>
    );
  }
  