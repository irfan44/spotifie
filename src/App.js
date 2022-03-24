import "./App.css";
import Track from "./components/Track";
import data from "./data/single-sample";

function App() {
  return (
    <div className="App">
      <Track data={data} />
    </div>
  );
}

export default App;
