import { useEffect, useState } from 'react';
import './App.css';
import contract from './contracts/NFTCollectible.json';
import { ethers } from 'ethers'; 
import Playground from './contracts/Components/Playground';

const contractAddress = "0x355638a4eCcb777794257f22f50c289d4189F245";
const abi = contract.abi;

function App() {
  
  //
  //
  // NFT STUFF BEGIN
  //
  //
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => { 
    const { ethereum } = window;

    if (!ethereum) {
        console.log("Ensure you have Metamask installed in your browser.");
    } else {
        console.log("Wallet detected: Metamask connection available.");
    }

    const ethAccounts = await ethereum.request({ method: 'eth_accounts' });

    if (ethAccounts.length !== 0) {
        const account = ethAccounts[0];
        console.log("Detected authorized account: ", account);
        setCurrentAccount(account);
    } else {
        console.log("No authorized account detected.");
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

  const mintNFTHandler = async () => {
    try {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(contractAddress, abi, signer);

            console.log("Payment process initiating");
            let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther("0.01") });

            console.log("Mining started.");
            console.log("Waiting for mining to complete...");
            await nftTxn.wait();

            console.log('Mine complete. Transaction available at: https://rinkeby.etherscan.io/tx/${nftTxn.hash}');

        } else {
            console.log("Ethereum object does not exist.");
        }
    } catch (error) {
        console.log(error);
    }
  }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const mintNFTButton = () => {
    return (
      <button onClick={mintNFTHandler} className='cta-button mint-nft-button'>
        Gimme some of that minty fresh Jakesauce, bitch.
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  // NFT STUFF ENDS

  return (
    <div className='main-app'>
    <Playground />
      <div className='shadow'>Jake's "Special Sauce" NFTs</div>
      <div>
        { currentAccount ? mintNFTButton() : connectWalletButton()}
      </div>
    </div>
  )
}

export default App;