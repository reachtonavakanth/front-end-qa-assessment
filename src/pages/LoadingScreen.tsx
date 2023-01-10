import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { LoadingProps } from '../interfaces/components';
import LoadingVideo from '../assets/videos/IntroSequence_V9.mp4';

function LoadingScreen({ setLoadUI }: LoadingProps) {
  const [playing, setPlaying] = useState(false);
  const [halted, setHalted] = useState(false);
  const [videoEnd, setVideoEnd] = useState(false);

  useEffect(() => {
    if (halted) {
      window.InitiateExperience();
      setPlaying(false);
      setTimeout(() => {
        setVideoEnd(true);
        setLoadUI();
      }, 1000);
    }
  }, [halted]);

  return (
    <Box
      className="loading-screen"
      position="fixed"
      width="100%"
      zIndex="25"
      h="100%"
      top="0"
      opacity={!videoEnd ? 1 : 0}
      visibility={!videoEnd ? 'visible' : 'hidden'}
      transition={!videoEnd ? 'unset' : 'visibility 0s linear 1s, opacity 1s'}
    >
      <Box className={`loading ${videoEnd && 'hide'}`} id="loading-screen">
        <ReactPlayer
          onReady={() => {
            setPlaying(true);
          }}
          onStart={() => {
            window.InitiateExperience();
          }}
          id="loading-screen-video"
          height="100%"
          width="100%"
          style={{ minHeight: '100vh' }}
          loop={false}
          muted
          controls={false}
          playing={playing}
          url={LoadingVideo}
          onEnded={() => {
            setVideoEnd(true);
            setLoadUI();
          }}
          onError={() => {
            setHalted(true);
          }}
          playsinline
        />
      </Box>
    </Box>
  );
}

export default LoadingScreen;
