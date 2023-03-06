import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />

        <a href="#" className="btn btn-primary" rel="noopener noreferrer">
          Test
        </a>
      </header>
    </div>
  );
}
