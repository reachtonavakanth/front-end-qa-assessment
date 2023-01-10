import axios from 'axios';
import { GetWalletAddress, WalletAddressIsValid } from '../../pages/WalletController';
const roomId = '175';
const headers = {
  'x-api-key': `${process.env.REACT_APP_ARIANEE_API_KEY}`,
  'Content-Type': 'application/json',
};

export function IsAuthorizedToEnter() {
  return axios({
    method: 'GET',
    url: `https://api.spkz.io/strategies?addresses=${GetWalletAddress()}&roomId=${roomId}`,
    headers: headers,
  });
}

export function GetAmountOfNFTs() {
  if (!WalletAddressIsValid()) {
    console.log('Wallet address not set correctly.');
    return null;
  }
  return axios({
    method: 'GET',
    url: `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xcD041F40d497038E2da65988b7D7e2C0D9244619&apikey=${
      process.env.REACT_APP_ETHERSCAN_API_KEY
    }&address=${GetWalletAddress()}`,
    timeout: 7000,
  });
}
