import React, { useState } from 'react';
import Layout from './components/common/Layout';
import ParticipationPage from './pages/ParticipationPage';

function App() {
  const [activeScene, setActiveScene] = useState('room-1_0');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <>
      (
      <Layout
        closeAll={() => {
          console.log('');
        }}
        activeScene={activeScene}
        setActiveScene={setActiveScene}
        toggleInstructions={() => {
          console.log('');
        }}
        audioActive={true}
        setAudioActive={() => {
          console.log('');
        }}
        closeSecondRoomPopUp={() => {
          console.log('');
        }}
        openLeaderboard={() => {
          console.log('');
        }}
      >
        <ParticipationPage
          active={true}
          setActive={() => true}
          openParticipationPageSuccess={() => {
            console.log('');
          }}
        />
      </Layout>
      )
    </>
  );
}

export default App;
