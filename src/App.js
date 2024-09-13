import ReactHowler from 'react-howler';
import {useState, useEffect} from 'react';
import Minipage from './Minipage';

/*
import orig_song from './test_mp3.mp3'

function PlayButton({song, onPlayClick}) {
  return (
    <button onClick={onPlayClick}>{song}</button>
  );
}


function MusicPlayer({song}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState( new Howl({src: [song]}) );
  
  function toggleSound(sd) {
    if(isPlaying) {
      sd.pause();
    }
    else {
      sd.play();
    }
    setIsPlaying(false);
  }
  useEffect(() => {toggleSound(sound)}, [sound]);

  function handleClick() {
    
    console.log("hi");
  }
  
  return (
    <> 
      <PlayButton song={song} onPlayClick={handleClick} />
    </>
  );
}
*/

// Contains information about audio file
class Song {
  constructor(title, artist, album, filePath, id) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.filePath = filePath;
    this.id = id; // Not sure how to impl this yet...
  }
}

// Render table of songs
function SongTable({songs, onSongClick}) {
  const listSongs = songs.map(song => 
    <tr>
      {/* Do something when user clicks song title */}
      <td>
        <a className='songselect' onClick={() => onSongClick(song)}>{song.title}</a>
      </td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
    </tr>
  );

  return (<>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
        </tr>
      </thead>
      <tbody>
        {listSongs}
      </tbody>
    </table>
  </>);
}

function PlayBar({song}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className='playbar'>
      <div className='playbar-row'>
        <ReactHowler src={song.filePath} playing={playing}/>

        <button className='playbutton' onClick={() => setPlaying(!playing)}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <Minipage maxWidth={'1200px'} maxHeight={'300px'}>
          <p style={{'font-size': '40px', 'transform': 'translate(0px, 10px)'}}>{song.title}</p>
          <p style={{'font-size': '20px'}}>{song.artist}</p>
          <p style={{'font-size': '20px', 'transform': 'translate(0px, -10px)'}}>{song.album}</p>
        </Minipage>
      </div>

      <div className='playbar-seekbar'>
        <a>seeeeeeeeeeeeeeek</a>
      </div>
    </div>
  );
}

export default function App() {
  //const [songs, setSongs] = useState(Array(4).fill(null));
  const songs = [
    new Song('Scarlet', '少女理論観測所', 'SUGAREDEN', '/audio/test_flac.flac', 0),
    new Song('Justice Justice', 'stereoberry, Ishizawa Yukari, Sanca', 'Indigolite', '/audio/test_m4a.m4a', 1),
    new Song('BRAND NEW', 'Headphone-Tokyo**', 'mt:[multiple tentative]', '/audio/test_mp3.mp3', 2),
    new Song('夏風と君の笑顔', 'Jun Kuroda', 'Summerlong EP', '/audio/test_wav.wav', 3),
    new Song('test', 'test-art', 'test-alb', 'http://localhost:8000/mami%20-%20%E3%83%A6%E3%83%8B/03%20%E3%82%B3%E3%83%B3%E3%83%86%E3%82%A3%E3%83%8B%E3%83%A5%E3%83%BC.flac', 4),
    new Song('羽化', 'test-art1', 'test-alb1', 'http://localhost:8000/%28No%20Scans%29%20%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%8E%E3%83%B3%20-%20AS%20YOU%20LIKE%20IT/DISC%202/10%20%E7%BE%BD%E5%8C%96.flac')
  ];
  
  const [currSong, setCurrSong] = useState(songs[0]);
  function onSongClick(song) {
    setCurrSong(song);
    console.log(song.title);
  }


  return (
    <>
      <body>
      <h1 className='main-title'>mp-web</h1>
        <PlayBar song={currSong} />
        <SongTable songs={songs} onSongClick={onSongClick} />
      </body>
    </>
  );
}

