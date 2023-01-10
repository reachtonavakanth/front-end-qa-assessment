import { Divider, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ForwardArrow } from '../../../Icons/ForwardArrow';
import { DotsMenuItemProps } from '../../../interfaces/components';

function DrawerMenuItem({ disabled, subHeading, heading, closeMenuOnClick }: DotsMenuItemProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      p="0px"
      pl={['10px']}
      onClick={closeMenuOnClick}
      w="100%"
      cursor={disabled ? 'unset' : 'pointer'}
      userSelect="none"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" w="100%">
        <Box>
          <Text textAlign="left" fontWeight="700" color={disabled ? 'gray' : 'unset'}>
            {heading}
          </Text>
          <Text textAlign="left" mt="5px" fontSize="14px" color={disabled ? 'gray' : 'unset'}>
            {subHeading}
          </Text>
        </Box>
        <ForwardArrow fill={disabled ? 'gray' : 'black'} boxSize={[3, 4, 4]} />
      </Box>
      <Divider borderColor="#C8C8C8" mt="10px" orientation="horizontal" />
    </Box>
  );
}

export default DrawerMenuItem;
