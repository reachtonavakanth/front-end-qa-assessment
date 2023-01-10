import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';

const EmperiaLink = () => {
  return (
    <Link href="https://emperiavr.com/" target="_blank">
      <Box position="fixed" bottom={['15px', '20px', '25px']} right={['15px', '20px', '25px']} cursor="pointer">
        <Text
          fontSize={['2vw', '1.8vw', '1.3vw', '0.8vw', '0.7vw', '0.7vw']}
          color="white"
          textShadow="3px 4px 7px rgba(0,0,0,0.8)"
        >
          created By Emperia
        </Text>
      </Box>
    </Link>
  );
};
export default EmperiaLink;
