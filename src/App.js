import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />

          <h1>Dictionary</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="beach" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
