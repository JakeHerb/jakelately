import { useEffect, useState } from 'react';
import './App.css';
import contract from './contracts/NFTCollectible.json';

const contractAddress = "0x355638a4eCcb777794257f22f50c289d4189F245";
const abi = contract.abi;

function App() {

    const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = () => { 
    const { ethereum } = window;

    if (!ethereum) {
        console.log("Ensure you have Metamask installed in your browser.");
    } else {
        console.log("Wallet detected: Metamask connection available.");
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
        alert("Please Install Metamask!");
    }

    try {
        const ethAccounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Ethereum account detected. ---> Primary Address: ", ethAccounts[0]);
        setCurrentAccount(ethAccounts[0]);
    } catch (error) {
        console.log(error);
    }
  }

  const mintNftHandler = () => { }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint NFT
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <div className='main-app'>
      <h1>Scrappy Squirrels Tutorial</h1>
      <div>
        {connectWalletButton()}
      </div>
    </div>
  )
}

export default App;