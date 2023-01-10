let walletAddress = '';
import { GetAccountResult } from '@wagmi/core';
import { P } from '@wagmi/core/dist/index-bacc1c49';
import { useWeb3Modal } from '@web3modal/react';
import React from 'react';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
let account: GetAccountResult<P> | null = null;
let modal: { open: any; isOpen?: boolean; close?: () => void };
const WalletController = () => {
  account = useAccount();
  modal = useWeb3Modal();
  useEffect(() => {
    setWalletAddress(account?.isConnected ? account?.address : '');
  }, [account?.isConnected]);
  return <></>;
};
export default WalletController;
export function IsAccountConnected() {
  return account?.isConnected;
}
export function setWalletAddress(address: any) {
  walletAddress = address;
}
export function GetWalletAddress() {
  return walletAddress;
}
export function WalletAddressIsValid() {
  return walletAddress != '';
}
export function ConnectWallet() {
  modal.open();
}
