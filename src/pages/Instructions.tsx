import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { Close } from '../Icons/Close';
import { Hand } from '../Icons/Hand';
import { HandsClick } from '../Icons/HandsClick';
import { LacosteIcon } from '../Icons/LacosteIcon';
import { InstructionsProps } from '../interfaces/components';
import { PopupTutorial } from '../content';

const Instructions = ({ instructionsFirst, active, setActive }: InstructionsProps) => {
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
        bg="rgba(255, 255, 255, 0.7);"
        padding={['15px', '15px', '15px 35px', '15px 35px']}
        borderRadius="30px"
        width={['200px', '200px', '700px', '800px', '800px']}
        height={['470px', '550px', '300px', '300px', '300px']}
      >
        {!instructionsFirst && (
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
        )}

        <Box
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="100%"
            height={['90%', '90%', 'auto']}
            display="flex"
            flexDirection={['column', 'column', 'unset']}
            justifyContent="center"
            alignItems="center"
          >
            <Box textAlign="center" width="100%">
              <Box h={['auto', 'auto', '80px', '80px', '80px']}>
                <Hand boxSize={[8, 10, 16]} />
              </Box>
              <Text
                textAlign="center"
                fontSize={['16px', '16px', '16px', '18px']}
                width="100%"
                padding={['10px', '15px', '20px']}
              >
                {window.locale === undefined || !((window.locale as keyof typeof PopupTutorial) in PopupTutorial)
                  ? PopupTutorial['en'].drag
                  : PopupTutorial[window.locale as keyof typeof PopupTutorial].drag}
              </Text>
            </Box>

            <Box textAlign="center" width="100%" m={['10px 0px', '15px 0px', 'unset', 'unset', 'unset']}>
              <Box h={['auto', 'auto', '75px', '80px', '80px']}>
                <LacosteIcon boxSize={[12, 12, 20, 20, 20]} />
              </Box>
              <Text
                textAlign="center"
                fontSize={['16px', '16px', '16px', '18px']}
                width="100%"
                padding={['10px', '15px', '20px']}
              >
                {window.locale === undefined || !((window.locale as keyof typeof PopupTutorial) in PopupTutorial)
                  ? PopupTutorial['en'].crocodile
                  : PopupTutorial[window.locale as keyof typeof PopupTutorial].crocodile}
              </Text>
            </Box>

            <Box textAlign="center" width="100%">
              <Box h={['auto', 'auto', '80px', '80px', '80px']}>
                <HandsClick boxSize={[8, 10, 16]} />
              </Box>
              <Text
                textAlign="center"
                fontSize={['16px', '16px', '16px', '18px']}
                width="100%"
                padding={['10px', '15px', '20px']}
              >
                {window.locale === undefined || !((window.locale as keyof typeof PopupTutorial) in PopupTutorial)
                  ? PopupTutorial['en'].products
                  : PopupTutorial[window.locale as keyof typeof PopupTutorial].products}
              </Text>
            </Box>
          </Box>

          <Box textAlign="center">
            <Button
              margin="0px auto"
              bg="#191919"
              color="#fff"
              borderRadius="25px"
              w={['80px', '100px', '150px', '150px', '150px']}
              _hover={{ bg: '#14160a', color: ' white' }}
              _focus={{ bg: '#14160a', color: ' white', boxShadow: 'outline' }}
              onClick={() => setActive()}
            >
              <Text fontSize={['14px', '16px', '18px', '18px', '18px']}>
                {instructionsFirst
                  ? window.locale === undefined || !((window.locale as keyof typeof PopupTutorial) in PopupTutorial)
                    ? PopupTutorial['en'].letsgo
                    : PopupTutorial[window.locale as keyof typeof PopupTutorial].letsgo
                  : window.locale === undefined || !((window.locale as keyof typeof PopupTutorial) in PopupTutorial)
                  ? PopupTutorial['en'].Ok
                  : PopupTutorial[window.locale as keyof typeof PopupTutorial].Ok}
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Instructions;
