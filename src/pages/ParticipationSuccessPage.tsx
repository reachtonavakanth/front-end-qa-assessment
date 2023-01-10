import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Close } from '../Icons/Close';
import { LacosteIconWhite } from '../Icons/LacosteIcon';
import { WelcomeCircleProps } from '../interfaces/components';
import { ParticipationSuccess } from '../content';
// import { GetAmountOfNFTs } from '../utils/client/arianee';

const ParticipationSuccessPage = ({ active, setActive }: WelcomeCircleProps) => {
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
        width={['85vw', '400px', '700px', '800px', '800px']}
        height={['max-content', 'max-content', 'max-content', 'max-content', 'max-content']}
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
          strokeWidth={0.5}
          onClick={() => setActive()}
          zIndex={30}
        />

        <Box>
          <LacosteIconWhite boxSize={[12, 12, 20, 20, 20]} />
        </Box>
        <Box textAlign="center" color="white" mb={'10px'}>
          <Text fontSize={['14px', '16px', '20px', '20px', '20px']} maxW={['100%']} margin="0 auto">
            {window.locale === undefined ||
            !((window.locale as keyof typeof ParticipationSuccess) in ParticipationSuccess)
              ? ParticipationSuccess['en'][0]
              : ParticipationSuccess[window.locale as keyof typeof ParticipationSuccess][0]}
          </Text>
        </Box>
        <Box textAlign="center" mt={['4.5vw', '10px', '10px', '10px', '10px']} color="white">
          <Text fontSize={['14px', '16px', '20px', '20px', '20px']} maxW={['85%']} margin="0 auto">
            {window.locale === undefined ||
            !((window.locale as keyof typeof ParticipationSuccess) in ParticipationSuccess)
              ? ParticipationSuccess['en'][1]
              : ParticipationSuccess[window.locale as keyof typeof ParticipationSuccess][1]}
          </Text>
        </Box>
        <Box textAlign="center" mt={['4.5vw', '10px', '10px', '10px', '10px']} color="white">
          <Text fontSize={['14px', '16px', '20px', '20px', '20px']} maxW={['85%']} margin="0 auto">
            {window.locale === undefined ||
            !((window.locale as keyof typeof ParticipationSuccess) in ParticipationSuccess)
              ? ParticipationSuccess['en'][2]
              : ParticipationSuccess[window.locale as keyof typeof ParticipationSuccess][2]}
          </Text>
        </Box>
        <Box textAlign="center" mt={'20px'} mb={'20px'}>
          <Button
            margin="0px auto"
            bg="#393A3C"
            color="#fff"
            borderRadius="25px"
            mt={['4.5vw', '10px', '20px', '20px', '20px']}
            w={['max-content', 'max-content', 'max-content', 'max-content', 'max-content']}
            _hover={{ bg: '#202122', color: ' white' }}
            _focus={{ bg: '#202122', color: ' white', boxShadow: 'outline' }}
            type="submit"
            onClick={() => setActive()}
          >
            <Text fontSize={['14px', '16px', '20px', '20px', '20px']}>OK</Text>
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default ParticipationSuccessPage;
