import React from 'react';
import YouTube from 'react-youtube';
import './WatchYoutube.css';
export  const WatchYoutube = () => {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div style= {{marginLeft: "20%"}}>
      <YouTube videoId="2g811Eo7K8U" opts={opts} />
    </div>
  );
}
