import { providers } from "ethers";
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { WalletIcon } from "@heroicons/react/24/outline";

export default function ConnectWallet() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [addressWallet, setAddressWallet] = useState(null);
  const web3ModalRef = useRef();

  const connectWallet = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const address = await signer.getAddress();

      setAddressWallet(address);
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  const getProviderOrSigner = async (getSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();

    if (chainId !== 11155111) {
      throw new Error("Pindah Jaringan ke Sepolia");
    }

    if (getSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
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
