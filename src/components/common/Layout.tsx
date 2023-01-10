import { Box, IconButton, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { LayoutProps, MenuOptionItem } from '../../interfaces/components';
import { Sound } from '../../Icons/Sound';
import { Info } from '../../Icons/Info';
import { SoundDisabled } from '../../Icons/SoundDisabled';
import EmperiaLink from '../EmperiaLink';
import { DotsMenu } from '../../Icons/DotsMenu';
import { Trophy } from '../../Icons/Throphy';
import { Close } from '../../Icons/Close';
import { Disconnect } from '../../Icons/Disconnect';
import DrawerMenuItem from './Layout/DrawerMenuItem';
import { Tick } from '../../Icons/Tick';
import { useAccount, useDisconnect } from 'wagmi';

const Layout = ({
  closeAll,
  activeScene,
  setActiveScene,
  audioActive,
  setAudioActive,
  children,
  toggleInstructions,
  openLeaderboard,
  closeSecondRoomPopUp,
}: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [options, setOptions] = useState<MenuOptionItem[]>([]);
  const account = useAccount();
  const disconnect = useDisconnect({
    onSuccess() {
      localStorage.clear();
      alert('Successfully disconnected!');
    },
  });

  const updateScene = (scene: string) => {
    closeAll();
    setMenuOpen(false);
    setActiveScene(scene);
    window.GotoScene(scene);
  };

  useEffect(() => {
    setOptions([
      {
        scene: 'room-1_0',
        heading: 'Element here',
        subHeading: 'element here',
        handler: () => updateScene('room-1_0'),
      },
    ]);
  }, []);

  useEffect(() => {
    const optionsMap = {
      'room-1_0': [
        {
          scene: 'room-1_0',
          heading: 'Element here',
          subHeading: 'element here',
          handler: () => updateScene('room-1_0'),
        },
      ],
    };

    if (activeScene !== 'room-2_0') {
      closeSecondRoomPopUp();
    }

    setOptions(optionsMap[activeScene as keyof typeof optionsMap]);
  }, [activeScene]);

  return (
    <Box className="layout" position="static" width="100%" height="100vh" bg="red">
      {/* Floating Buttons - Right */}
      <Box
        position="fixed"
        top={['20px', '30px', '50px', '50px']}
        right={['20px', '30px', '50px', '50px']}
        display="flex"
        flexDirection="column"
        zIndex={6}
      >
        <IconButton
          bg="white"
          borderRadius="100%"
          aria-label="Open Menu"
          icon={<DotsMenu boxSize={[4, 4, 4]} />}
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* <IconButton icon={} /> */}
        <IconButton
          bg="white"
          borderRadius="100%"
          aria-label="Open Instructions"
          icon={<Info fill="black" boxSize={[4, 5, 6]} />}
          margin={['10px 0px']}
          onClick={toggleInstructions}
        />
        <IconButton
          bg="white"
          borderRadius="100%"
          aria-label="Toggle Audio"
          onClick={setAudioActive}
          icon={
            audioActive ? (
              <Sound boxSize={[4, 5, 6]} cursor="pointer" fill="black" />
            ) : (
              <SoundDisabled boxSize={[4, 5, 6]} cursor="pointer" fill="black" />
            )
          }
        />
        <IconButton
          bg="white"
          borderRadius="100%"
          margin={['10px 0px']}
          aria-label="Disconnect Wallet"
          display={account.isConnected && activeScene != 'room-3_0' ? 'block' : 'none'}
          onClick={() => disconnect.disconnect()}
          icon={<Disconnect fill="black" boxSize={[4, 4, 6]} />}
        />
      </Box>
      {/* Floating Buttons - Left */}
      <Box
        position="fixed"
        top={['20px', '30px', '50px', '50px']}
        left={['20px', '30px', '50px', '50px']}
        display={activeScene == 'room-3_0' ? 'flex' : 'none'}
        flexDirection="column"
        zIndex={6}
      >
        <IconButton
          bg="white"
          borderRadius="100%"
          height="60px"
          width="60px"
          aria-label="Open Trophy"
          icon={<Trophy fill="black" boxSize={[7, 9, 9]} />}
          onClick={openLeaderboard}
        />
      </Box>
      {/* Drawer */}
      <Drawer
        isOpen={menuOpen}
        placement="right"
        onClose={() => setMenuOpen(false)}
        size={['full', 'full', 'sm', 'sm', 'sm', 'sm']}
        closeOnOverlayClick={false}
      >
        <DrawerOverlay onClick={() => setMenuOpen(true)} />
        <DrawerContent backgroundColor="white" className="drawer-content">
          <DrawerBody borderRadius="none" p="0px" pt={['15px', '50px', '50px', '50px']}>
            <Close
              boxSize={[4, 4, 4]}
              position="fixed"
              top={['15px', '20px', '25px']}
              right={['15px', '20px', '25px']}
              cursor="pointer"
              fill="black"
              stroke="black"
              strokeWidth={0.5}
              onClick={() => setMenuOpen(false)}
              zIndex={30}
            />

            <Box
              zIndex={6}
              position="fixed"
              top={['0vh', '0vh', 'unset']}
              bottom={['0vh', '0vh', 'unset']}
              pl={['0px', '0px', '0px', '0px', '0px']}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={['center', 'center', 'flex-start', 'flex-start', 'flex-start', 'flex-start']}
              w={['100%', '100%', '100%', '100%', '100%', '100%']}
              textAlign={['center', 'center', 'left', 'left', 'left']}
              mr={['15px', '20px', '25px']}
            >
              {options?.map((option: MenuOptionItem, index: number) => (
                <Box
                  key={option.heading}
                  p={['15px 0px', '15px 0px', '12px 25px', '12px 25px', '12px 25px']}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  w={['85vw', '70vw', '100%', '100%', '100%']}
                >
                  <Tick
                    fill={activeScene === option.scene ? 'black' : 'none'}
                    boxSize={[3, 4, 4]}
                    mr={['10px', '10px', '10px', '10px', '10px']}
                  />
                  <DrawerMenuItem
                    disabled={index === options.length - 1}
                    active={activeScene === option.scene}
                    heading={option.heading}
                    subHeading={option.subHeading}
                    closeMenuOnClick={() => {
                      if (index !== options.length - 1) {
                        setMenuOpen(false);
                        option.handler();
                      }
                    }}
                  />
                </Box>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Content */}
      <Box>{children}</Box>
      {/* Created By Emperia Link */}
      <EmperiaLink />
    </Box>
  );
};
export default Layout;
