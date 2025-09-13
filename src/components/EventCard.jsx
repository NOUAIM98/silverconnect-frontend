export default function EventCard({ event, handleRSVP, isRSVPed }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
        <p className="text-lg text-gray-700 mb-4">{event.description}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>RSVPs:</strong> {event.rsvps.length}</p>
        <button onClick={() => handleRSVP(event._id)} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
          {isRSVPed ? "✓ You're Going!" : "RSVP"}
        </button>
      </div>
    );
  }
  