import React, { useState } from 'react';
import { Box, Text, Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { Close } from '../Icons/Close';
import { ParticipationPageProps } from '../interfaces/components';

const ParticipationPage = ({ active, setActive }: ParticipationPageProps) => {
  const [discordTag, setDiscordTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => setDiscordTag(e.target.value);

  const onSubmitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (isError) {
      alert('Error!');
    } else {
      alert('Thank you for participating');
      setIsSubmitting(false);
    }
  };
  const isError = discordTag === '' || !discordTag.includes('#');

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
        right={'40px'}
        left={0}
        bottom={0}
        margin="auto"
        bg="rgba(2, 2, 2, 0.8);"
        borderColor="rgba(2, 2, 2, 0.8);"
        padding="15px"
        borderRadius="30px"
        width={['85vw', '85vw', '800px', '800px']}
        height={['max-content', 'max-content', '600px', 'max-content', 'max-content']}
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

        <Box textAlign="center" color="white">
          <Text fontSize={['14px', '16px', '20px', '20px', '20px']} maxW={['50vh']} margin="0 auto">
            Welcome to the signup page!
          </Text>
        </Box>
        <Box textAlign="center" mt={['4.5vw', '4.5vw', '4.5vw', '4.5vw', '4.5vw']} color="white">
          <Text fontSize={['20px']} maxW={['100%']} margin="0 auto">
            Please provide your discord Tag to the input field below. Please note that the discord ID needs to be
            formatted like so: DiscordName#3242
          </Text>
        </Box>
        <Box textAlign="center" color="white">
          <Text fontSize={['14px', '16px', '20px', '20px', '20px']} maxW={['100%']} margin="0 auto">
            Click on submit to submit your discord ID.
          </Text>
        </Box>
        <Box textAlign="center" mt={'20px'} mb={'20px'} as="form" onSubmit={onSubmitHandler}>
          <FormControl>
            <FormLabel color={'white'}>Discord Tag</FormLabel>
            <Input
              placeholder="Discord#0000"
              size="lg"
              value={discordTag}
              onChange={handleInputChange}
              color={'white'}
            />
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
              isLoading={isSubmitting}
            >
              <Text fontSize={['14px', '16px', '20px', '20px', '20px']}>Submit</Text>
            </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};
export default ParticipationPage;
