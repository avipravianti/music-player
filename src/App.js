import React, {useState} from "react"
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss"
import chillHop from "./data";

function App() {
  const [songs, setSongs] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(songs[0])

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player/>
    </div>
  );
}

export default App;
