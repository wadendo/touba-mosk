import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

export function WatchYoutube() {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div style={{marginLeft: "25%", marginRight: "25%"}}>
      <YouTube videoId="2g811Eo7K8U" opts={opts} />
    </div>
  );
}
