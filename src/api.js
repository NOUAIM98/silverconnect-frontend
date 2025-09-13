import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Auth
export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);

// Stories
export const fetchStories = () => API.get("/stories");
export const postStory = (data) => API.post("/stories", data);

// Events
export const fetchEvents = () => API.get("/events");
export const rsvpEvent = (id, username) => API.post(`/events/${id}/rsvp`, { username });

// Messages
export const fetchMessages = () => API.get("/messages");
export const postMessage = (data) => API.post("/messages", data);
