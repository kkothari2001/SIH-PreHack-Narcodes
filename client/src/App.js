import "./App.css";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";
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
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
