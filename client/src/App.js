import "./App.css";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";
import Profile from "./Components/Profile";
import Chat from "./Components/Chat";
import Tutor from "./Components/Tutor";
import FooterPage from "./Components/FooterPage";

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Tutor />
      <FooterPage />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
