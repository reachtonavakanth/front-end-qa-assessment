import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { Close } from '../Icons/Close';
import { LacosteIcon } from '../Icons/LacosteIcon';
import { WelcomeCircleProps } from '../interfaces/components';
import { PopupLookup } from '../content';
const SecondRoomPopUp = ({ active, setActive }: WelcomeCircleProps) => {
  return (
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
      bg="rgba(255, 255, 255, 0.7);"
      padding="15px"
      borderRadius="30px"
      width={['85vw', '250px', '700px', '800px', '800px']}
      height={['max-content', '300px', '300px', '300px', '300px']}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Close
        boxSize={[4, 4, 4]}
        position="absolute"
        top={['25px', '25px', '25px']}
        right={['25px', '25px', '25px']}
        cursor="pointer"
        fill="black"
        stroke="black"
        strokeWidth={0.5}
        onClick={() => setActive()}
        zIndex={30}
      />
      <Box h={['auto', 'auto', '80px', '80px', '80px']}>
        <LacosteIcon boxSize={[12, 12, 20, 20, 20]} />
      </Box>
      <Box textAlign="center">
        <Text
          textAlign="center"
          fontSize={['16px', '16px', '16px', '18px']}
          width="100%"
          padding={['0px', '0px', '8px', '10px', '10px']}
        >
          {window.locale === undefined || !((window.locale as keyof typeof PopupLookup) in PopupLookup)
            ? PopupLookup['en']
            : PopupLookup[window.locale as keyof typeof PopupLookup]}
        </Text>
      </Box>
      <Box textAlign="center">
        <Button
          margin="0px auto"
          bg="#191919"
          color="#fff"
          borderRadius="25px"
          mt={['4.5vw', '10px', '20px', '20px', '20px']}
          w={['80px', '100px', '150px', '150px', '150px']}
          _hover={{ bg: '#14160a', color: ' white' }}
          _focus={{ bg: '#14160a', color: ' white', boxShadow: 'outline' }}
          onClick={() => setActive()}
        >
          <Text fontSize={['14px', '16px', '20px', '20px', '20px']}>Ok</Text>
        </Button>
      </Box>
    </Box>
  );
};
export default SecondRoomPopUp;
