import "./App.css";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Tutor from "./Components/Tutor";
import FooterPage from "./Components/FooterPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Tutor />
      <FooterPage />
    </div>
  );
}

export default App;
