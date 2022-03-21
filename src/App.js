import "./App.css";
import data from "./data/single-sample";

function App() {
  return (
    <div className="App">
      <div>
        <img src={data.album.images[0].url} width="124" height="124" />
      </div>
      <div>
        <h2>{data.name}</h2>
        <h3>{data.album.name}</h3>
        <p>{data.artists[0].name}</p>
      </div>
    </div>
  );
}

export default App;
