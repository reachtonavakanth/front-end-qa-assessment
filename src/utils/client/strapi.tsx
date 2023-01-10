import axios from 'axios';
const strapiDomain = 'https://lacoste-emperia-experience.azurewebsites.net/';
const participateEndpoint = 'participants/participate';
const leaderboardEndpoint = 'leaderboard';

export function SubmitParticipant(discordId: any, walletAddress: any, numberOfNFTs: number) {
  //testing event.
  const data = JSON.stringify({
    discordId: discordId,
    wallet: walletAddress,
    numberOfNFTs: numberOfNFTs,
  });
  return axios({
    method: 'post',
    url: strapiDomain.concat(participateEndpoint),
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  });
}

export function RetrieveLeaderboard() {
  return axios({
    method: 'get',
    url: strapiDomain.concat(leaderboardEndpoint),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
