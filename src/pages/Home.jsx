import React from "react";

function Home() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Welcome to SilverConnect
      </h1>
      <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
        A community platform designed to help seniors stay active, connected,
        and engaged with their community. Share your stories, join events, and
        make new friends.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
          <div className="text-4xl mb-4">📖</div>
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Share Your Stories
          </h3>
          <p className="text-lg text-gray-700">
            Share your experiences, memories, and wisdom with the community.
          </p>
        </div>
        <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-green-600 mb-4">
            Join Events
          </h3>
          <p className="text-lg text-gray-700">
            Discover local activities and gatherings for everyone.
          </p>
        </div>
        <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-200">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-2xl font-bold text-purple-600 mb-4">
            Connect & Chat
          </h3>
          <p className="text-lg text-gray-700">
            Make friends and stay connected with your community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
