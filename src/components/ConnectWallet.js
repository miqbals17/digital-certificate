import { ethers, providers } from "ethers";
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { WalletIcon } from "@heroicons/react/24/outline";

export default function ConnectWallet() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [addressWallet, setAddressWallet] = useState(null);
  const web3ModalRef = useRef();

  const connectWallet = async () => {
    try {
      await getProviderOrSigner(true);
      // const address = await signer.getAddress();
    } catch (err) {
      console.error(err);
    }
  };

  const getProviderOrSigner = async (getSigner = false) => {
    try {
      if (window.ethereum) {
        console.log("Metamask detected");

        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(accounts);

          setAddressWallet(accounts[0]);
          setWalletConnected(true);

          return accounts[0];
        } catch (err) {
          window.alert(err);
          console.error(err);
        }
      } else {
        console.log("Metamask not detected");
        throw new Error("Metamask not deteced");
      }
    } catch (err) {
      window.alert(err);
      console.error(err);
    }

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts", []);

    // console.log(await provider.getNetwork());

    // const { chainId } = await provider.getNetwork();

    // if (chainId !== 11155111) {
    //   window.alert("Pindah jaingan ke Sepolia!");
    //   throw new Error("Pindah Jaringan ke Sepolia");
    // }

    // if (getSigner) {
    //   const signer = provider.getSigner();
    //   return signer;
    // }

    // return provider;
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "sepolia",
        providerOptions: {},
        disableInjectedProvider: false,
      });
    }
  });

  if (!walletConnected)
    return (
      <button
        className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white text-sm py-2 px-3 rounded-md font-medium"
        onClick={connectWallet}
      >
        <WalletIcon className="h-6 w-6 mr-2" aria-hidden="true" />
        Connect Wallet
      </button>
    );

  return <p className="text-gray-300 text-sm font-medium">Connected</p>;
}
