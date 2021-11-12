import React ,{useState} from 'react'
import ReactHowler from 'react-howler';
//import musics
import FilmOut from '../assets/music/FilmOut.mp3';
import Nightmare from '../assets/music/Nightmare.mp3';
import HipHop1 from '../assets/music/HipHop1.mp3';
import HipHop2 from '../assets/music/HipHop2.mp3';
import Nature1 from '../assets/music/Nature1.mp3';
import Nature2 from '../assets/music/Nature2.mp3';
import KillMeHealMe from '../assets/music/KillMeHealMe.mp3';

export const Music = () => {

    const [playingMusic , setPlayingMusic] = useState(false);
    let [currentMusic , setCurrentMusic] = useState(0);

    const musicSources = [FilmOut, HipHop1, Nightmare, Nature1, KillMeHealMe, HipHop2, Nature2];

    //handle play and pause
    const handleMusic = () =>{
      if(playingMusic == false){
        setPlayingMusic(true);
      }else{
        setPlayingMusic(false);
      }
    }
    const nextMusic = () =>{
      if (currentMusic < musicSources.length) {
        setCurrentMusic(currentMusic++);
      }else if(currentMusic >= musicSources.length){
        setCurrentMusic(0);
      }
    }
    const prevMusic = () =>{
      if(currentMusic > 0){
        setCurrentMusic(currentMusic--);
      }else if(currentMusic <= 0){
        setCurrentMusic(musicSources.length - 1);
      }
    }

    return (
        <section className="music-options">
            {playingMusic 
                ? (<a onClick={() => prevMusic()}>
                    <i className= "	fas fa-angle-double-left nav-tooltip">
                      <span className="tooltip-text">Prev Music</span>
                    </i>
                  </a>)
                :null
            }

            <ReactHowler
                src={musicSources[currentMusic]}
                playing={playingMusic}
                loop={true}
            />
            <a onClick={() => handleMusic()}>
                <i className={playingMusic ? "fas fa-volume-mute nav-tooltip" : "fab fa-itunes-note nav-tooltip"}>
                    <span className="tooltip-text">{playingMusic ? 'Pause Music' : 'Play Music'}</span>
                </i>
            </a>

            {playingMusic 
                ? (<a onClick={() => nextMusic()}>
                    <i className= "	fas fa-angle-double-right nav-tooltip">
                      <span className="tooltip-text">Next Music</span>
                    </i>
                  </a>)
                :null
            }
        </section>
    )
}
