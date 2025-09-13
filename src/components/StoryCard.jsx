export default function StoryCard({ story }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
        <h4 className="text-xl font-semibold text-gray-900">{story.username}</h4>
        <p className="text-gray-600">{new Date(story.timestamp).toLocaleString()}</p>
        <p className="text-lg text-gray-700 leading-relaxed mt-2">{story.content}</p>
      </div>
    );
  }
  