import { MenuItem, Divider, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ForwardArrow } from '../../../Icons/ForwardArrow';

import { DotsMenuItemProps } from '../../../interfaces/components';

function DotsMenuItem({ subHeading, heading, closeMenuOnClick }: DotsMenuItemProps) {
  return (
    <MenuItem
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      p="0px"
      pl={['10px']}
      onClick={closeMenuOnClick}
      w="90%"
      _hover={{ bg: 'white' }}
      _active={{ bg: 'white' }}
      _focus={{ bg: 'white' }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" w="100%">
        <Box>
          <Text fontWeight="700">{heading}</Text>
          <Text mt="5px" fontSize="14px">
            {subHeading}
          </Text>
        </Box>
        <ForwardArrow fill="black" boxSize={[3, 4, 4]} />
      </Box>
      <Divider borderColor="#C8C8C8" mt="10px" orientation="horizontal" />
    </MenuItem>
  );
}

export default DotsMenuItem;
