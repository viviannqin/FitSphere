import "./App.css";
import Button from "react-bootstrap/Button";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="joinButton">
        <Button variant="outline-dark">Start Your Journey</Button>{" "}
      </div>
    </div>
  );
}

export default App;
