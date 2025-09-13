import React, { useState } from "react";

function LoginModal({ onClose }) {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {isRegister ? "Register" : "Login"}
        </h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
          />
          {isRegister && (
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 border rounded"
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 underline"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
