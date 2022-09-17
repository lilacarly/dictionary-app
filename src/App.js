import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Lila's Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">By Lila Graham</footer>
      </div>
    </div>
  );
}

export default App;
