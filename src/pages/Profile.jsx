export default function Profile() {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>
        <div className="max-w-md mx-auto bg-white shadow rounded-lg p-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">John Doe</h2>
          <p className="text-gray-600 mb-4">Active member since 2025</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    );
  }
  