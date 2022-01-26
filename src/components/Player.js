import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons'


const Player = ({currentSong, playing, setPlaying}) => {
    const audioRef = useRef(null)
    const playHandler = () => {
        if(playing) {
            audioRef.current.pause();
            setPlaying(!playing);
        } else {
            audioRef.current.play();
            setPlaying(!playing);   
        }   
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range"/>
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='previous' size="2x" icon={faStepBackward}/>
                <FontAwesomeIcon className='play' onClick={playHandler} size="2x" icon={faPlay}/>
                <FontAwesomeIcon className='next' size="2x" icon={faStepForward}/>
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
        
    )
}

export default Player 