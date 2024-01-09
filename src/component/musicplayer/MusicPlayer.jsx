// MusicPlayer.js
import React, { useState, useRef } from 'react';
// import './MusicPlayer.css'; // You can create this CSS file for styling

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const songs = [
    {
      title: 'Song 1',
      src: '/path/to/song1.mp3',
    },
    {
      title: 'Song 2',
      src: '/path/to/song2.mp3',
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    // You can use e.target.currentTime and e.target.duration to update the UI
    // with the current playback time and total duration if needed.
    // For simplicity, we are not updating the UI in this example.
  };

  const songEndHandler = () => {
    // Play the next song when the current song ends
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
      <div className="music-info">
        <h3>{currentSong.title}</h3>
      </div>
      <div className="controls">
        <button onClick={playPauseHandler}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
