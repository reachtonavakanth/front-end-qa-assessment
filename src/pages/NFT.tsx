import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { Close } from '../Icons/Close';
import { LacosteIconWhite } from '../Icons/LacosteIcon';
import { NFTProps } from '../interfaces/components';
import { PopupUNDW3Entry, PopupUNDW3Failure, PopupUNDW3Success } from '../content';
import { IsAuthorizedToEnter } from '../utils/client/arianee';
import { ConnectWallet, IsAccountConnected } from './WalletController';
import { useAccount, useDisconnect } from 'wagmi';

const NFT = ({ active, setActive, setActiveScene }: NFTProps) => {
  const GetTextByLocale = (ContentLookup: any) => {
    return window.locale === undefined || !((window.locale as keyof typeof ContentLookup) in ContentLookup)
      ? ContentLookup['en']
      : ContentLookup[window.locale as keyof typeof ContentLookup];
  };

  const [isLoading, setIsLoading] = useState(false);
  const [triedAuthorizing, setTriedAuthorizing] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [accessButtonText, setAccessButton] = useState('Connect');
  const account = useAccount();
  const disconnect = useDisconnect();
  const updateScene = (scene: string) => {
    setActiveScene(scene);
    window.GotoScene(scene);
  };
  const descriptionText = GetTextByLocale(PopupUNDW3Entry);

  const [description, setDescription] = useState(descriptionText);

  useEffect(() => {
    setAccessButton(!account?.isConnected ? 'Connect' : triedAuthorizing && !isAuthorized ? 'Disconnect' : 'Enter');

    if (!account?.isConnected) {
      setDescription(GetTextByLocale(PopupUNDW3Entry));
      setTriedAuthorizing(false);
      setIsAuthorized(false);
      return;
    }
    if (isAuthorized && account?.isConnected && active) {
      SuccessEnter();
    } else if (triedAuthorizing && !isAuthorized && account?.isConnected && active) {
      FailEnter();
    }
  }, [active, account?.isConnected, isAuthorized, triedAuthorizing]);

  const SuccessEnter = () => {
    setTimeout(function () {
      setActive();
      setIsLoading(false);
    }, 6000);
    setDescription(GetTextByLocale(PopupUNDW3Success).success);
    updateScene('room-3_0');
  };

  const FailEnter = () => {
    setIsLoading(false);
    setDescription(GetTextByLocale(PopupUNDW3Failure));
  };
  const TryToAccess = async () => {
    setIsLoading(true);
    if (IsAccountConnected() && triedAuthorizing && !isAuthorized) {
      disconnect.disconnect();
      setIsLoading(false);
      return;
    }
    if (!IsAccountConnected()) {
      ConnectWallet();
      setIsLoading(false);
      return;
    } else {
      const isAuthorized = await checkIsAuthorized();
      setTriedAuthorizing(true);
      setIsAuthorized(isAuthorized);
      if (isAuthorized) {
        SuccessEnter();
      } else {
        FailEnter();
      }
    }
    setIsLoading(false);
  };

  const checkIsAuthorized = async () => {
    return IsAuthorizedToEnter()
      .then((res: any) => {
        return res.data.isAuthorized;
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Box
        position="fixed"
        w="100%"
        h="100%"
        top="0"
        left="0"
        opacity={active ? 1 : 0}
        visibility={active ? 'visible' : 'hidden'}
        backgroundColor="rgba(0,0,0,0.1)"
        transition="all 1s"
        zIndex={4}
        onClick={() => setActive()}
      />

      <Box
        zIndex={5}
        opacity={active ? 1 : 0}
        visibility={active ? 'visible' : 'hidden'}
        transition="all 0.5s"
        position="fixed"
        top={0}
        right={0}
        left={0}
        bottom={0}
        margin="auto"
        bg="rgba(2, 2, 2, 0.8);"
        borderColor="rgba(2, 2, 2, 0.8);"
        padding="15px"
        borderRadius="30px"
        width={['85vw', '350px', '700px', '800px', '800px']}
        height={['max-content', '300px', '300px', '300px', '300px']}
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Close
          position="absolute"
          boxSize={[3, 4, 4]}
          top={['25px', '25px', '25px']}
          right={['25px', '25px', '25px']}
          cursor="pointer"
          fill="white"
          stroke="white"
          display="block"
          strokeWidth={0.5}
          onClick={() => setActive()}
          zIndex={30}
        />

        <Box>
          <LacosteIconWhite boxSize={[12, 12, 20, 20, 20]} />
        </Box>
        <Box textAlign="center" color="white">
          <Text fontSize={['14px', '16px', '20px', '20px', '20px']} maxW={['100%']} margin="0 auto">
            {description}
          </Text>
          <Text
            fontSize={['14px', '16px', '20px', '20px', '20px']}
            display={IsAccountConnected() && isAuthorized ? 'block' : 'none'}
            maxW={['100%']}
            margin="0 auto"
          >
            {GetTextByLocale(PopupUNDW3Success).bag}
          </Text>
          <Text
            fontSize={['14px', '16px', '20px', '20px', '20px']}
            display={IsAccountConnected() && isAuthorized ? 'block' : 'none'}
            maxW={['100%']}
            margin="0 auto"
          >
            {GetTextByLocale(PopupUNDW3Success).leaderboard}
          </Text>
        </Box>
        <Box textAlign="center">
          <Button
            margin="0px auto"
            bg="#393A3C"
            color="#fff"
            borderRadius="25px"
            mt={['4.5vw', '10px', '20px', '20px', '20px']}
            w={['80px', '100px', '150px', '150px', '150px']}
            _hover={{ bg: '#202122', color: ' white' }}
            _focus={{ bg: '#202122', color: ' white', boxShadow: 'outline' }}
            visibility={triedAuthorizing && isAuthorized ? 'hidden' : 'visible'}
            isLoading={isLoading}
            onClick={() => TryToAccess()}
            pointerEvents={active ? 'all' : 'none'}
            fontSize={['14px', '16px', '20px', '20px', '20px']}
            textAlign="center"
            textColor="white"
          >
            {accessButtonText}
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default NFT;
