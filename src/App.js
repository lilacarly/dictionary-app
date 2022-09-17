import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Lila's Dictionary</header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="text-center">
          By Lila Graham,{" "}
          <a
            href="https://github.com/lilacarly/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
