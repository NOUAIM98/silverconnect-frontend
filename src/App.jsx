import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Events from "./pages/Events";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onLoginClick={() => setIsLoginOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/events" element={<Events />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
        {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;
