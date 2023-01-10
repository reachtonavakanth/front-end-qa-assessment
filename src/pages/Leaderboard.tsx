import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Heading, TableContainer, Table, Tr, Image, Td, Tbody } from '@chakra-ui/react';
import { Close } from '../Icons/Close';
import { LacosteIconWhite } from '../Icons/LacosteIcon';
import { WelcomeCircleProps } from '../interfaces/components';
import GoldBag from '../assets/images/GoldBag.png';
import SilverBag from '../assets/images/SilverBag.png';
import BronzeBag from '../assets/images/BronzeBag.png';
import { RetrieveLeaderboard } from '../utils/client/strapi';
import { LeaderboardEntry } from '../types/strapi';

const Leaderboard = ({ active, setActive }: WelcomeCircleProps) => {
  const [first, setFirst] = useState<LeaderboardEntry>();
  const [second, setSecond] = useState<LeaderboardEntry>();
  const [third, setThird] = useState<LeaderboardEntry>();
  const [fourth, setFourth] = useState<LeaderboardEntry>();
  const [fifth, setFifth] = useState<LeaderboardEntry>();
  const [date, setDate] = useState();

  useEffect(() => {
    if (!active) return;
    RetrieveLeaderboard().then((response) => {
      const data = response.data;
      setDate(data.Date);
      setFirst({ walletAddress: data.First.WalletAddress, DiscordId: data.First.DiscordID });
      setSecond({ walletAddress: data.Second.WalletAddress, DiscordId: data.Second.DiscordID });
      setThird({ walletAddress: data.Third.WalletAddress, DiscordId: data.Third.DiscordID });
      setFourth({ walletAddress: data.Fourth.WalletAddress, DiscordId: data.Fourth.DiscordID });
      setFifth({ walletAddress: data.Fifth.WalletAddress, DiscordId: data.Fifth.DiscordID });
    });
  }, [active]);
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
        width={['75vw', '75vw', '600px', '800px', '950px']}
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
        <Box textAlign="center" color="white">
          <Heading fontSize={['14px', '16px', '20px', '20px', '20px']} maxW={['100%']} margin="0 auto">
            {`Winners for ${date}`}
          </Heading>
        </Box>
        <Box textAlign="center" w="95%" color="white" mt="20px">
          <TableContainer>
            <Table variant="simple" w="95%" wordBreak="break-word" cellSpacing={'40px 40px'}>
              <Tbody>
                <Tr height="90px">
                  <Td alignContent={'center'} minW="60px">
                    <Image alt="Gold Bag" w="80px" src={GoldBag}></Image>
                  </Td>
                  <Td textAlign="left">
                    <Text fontWeight="700">{first?.DiscordId}</Text>
                  </Td>
                  <Td padding="0px" textAlign="right" display={['none', 'none', 'none', 'table-cell', 'table-cell']}>
                    {first?.walletAddress}
                  </Td>
                </Tr>
                <Tr height="90px">
                  <Td alignContent={'center'} minW="50px" padding="0px">
                    <Image alt="Silver Bag" src={SilverBag} w="70px"></Image>
                  </Td>
                  <Td textAlign="left">
                    <Text fontWeight="700">{second?.DiscordId}</Text>
                  </Td>
                  <Td padding="0px" textAlign="right" display={['none', 'none', 'none', 'table-cell', 'table-cell']}>
                    {second?.walletAddress}
                  </Td>
                </Tr>
                <Tr height="90px">
                  <Td alignContent={'center'} minW="40px" padding="0px">
                    <Image alt="Bronze Bag" src={BronzeBag} w="50px"></Image>
                  </Td>
                  <Td textAlign="left">
                    {' '}
                    <Text fontWeight="700">{third?.DiscordId}</Text>
                  </Td>
                  <Td padding="0px" textAlign="right" display={['none', 'none', 'none', 'table-cell', 'table-cell']}>
                    {third?.walletAddress}
                  </Td>
                </Tr>
                <Tr height="90px">
                  <Td alignContent={'center'} minW="40px" padding="0px">
                    <Image alt="Bronze Bag" src={BronzeBag} w="50px"></Image>
                  </Td>
                  <Td textAlign="left">
                    {' '}
                    <Text fontWeight="700" mb="8px">
                      {fourth?.DiscordId}
                    </Text>
                  </Td>
                  <Td padding="0px" textAlign="right" display={['none', 'none', 'none', 'table-cell', 'table-cell']}>
                    {fourth?.walletAddress}
                  </Td>
                </Tr>
                <Tr height="90px">
                  <Td alignContent={'center'} minW="50px" padding="0px">
                    <Image alt="Bronze Bag" src={BronzeBag} w="50px"></Image>
                  </Td>
                  <Td textAlign="left">
                    {' '}
                    <Text fontWeight="700" mb="8px">
                      {fifth?.DiscordId}
                    </Text>
                  </Td>
                  <Td padding="0px" textAlign="right" display={['none', 'none', 'none', 'table-cell', 'table-cell']}>
                    {fifth?.walletAddress}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Button
          margin="0px auto"
          bg="#393A3C"
          color="#fff"
          borderRadius="25px"
          mt={['2.5vw', '10px', '20px', '20px', '20px']}
          mb={['2.5vw', '10px', '20px', '20px', '20px']}
          w={['max-content', 'max-content', 'max-content', 'max-content', 'max-content']}
          _hover={{ bg: '#202122', color: ' white' }}
          _focus={{ bg: '#202122', color: ' white', boxShadow: 'outline' }}
          type="submit"
          onClick={() => setActive()}
        >
          <Text fontSize={['14px', '16px', '20px', '20px', '20px']}>OK</Text>
        </Button>
      </Box>
    </>
  );
};
export default Leaderboard;
