import React, { useState } from "react";

function Events() {
  const [events] = useState([
    { title: "Walking Group", date: "2025-09-20", desc: "Join us for a morning walk in the park." },
    { title: "Chess Club", date: "2025-09-22", desc: "Weekly chess meetup at the community hall." }
  ]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
      <ul className="space-y-4">
        {events.map((ev, i) => (
          <li key={i} className="bg-white p-4 rounded shadow border-l-4 border-green-500">
            <h3 className="text-xl font-bold">{ev.title}</h3>
            <p className="text-gray-600">{ev.date}</p>
            <p className="text-gray-800 mt-2">{ev.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
