import React, {useState} from "react"
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss"
import chillHop from "./data";

function App() {
  const [songs, setSongs] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [playing, setPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} playing={playing} setPlay={setPlaying}/>
    </div>
  );
}

export default App;
