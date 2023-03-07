import React, {useState} from 'react'
import {ethers} from 'ethers'
import Name_abi from './contracts/Name_abi.json'
import './App.css';

const Name = () => {

	// deploy simple storage contract and paste deployed contract address here. This value is local ganache chain
	let contractAddress = '0x3CaD522f797eaAB4DEAA1A29fbcA031466B40981';

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const [currentContractVal, setCurrentContractVal] = useState(null);

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);

		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);

		let tempContract = new ethers.Contract(contractAddress, Name_abi, tempSigner);
		setContract(tempContract);	
	}

	const setHandler = (event) => {
		event.preventDefault();
		console.log('sending ' + event.target.setText.value + ' to the contract');
		contract.set(event.target.setText.value);
		console.log('seted ' + event.target.setText.value + ' to the contract');
	}

	const getCurrentVal = async () => {
		let val = await contract.get();
        console.log(val);
	}
	
	return (
		<div>
		<h4>read write Contract </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<form onSubmit={setHandler}>
				<input id="setText" type="text"/>
				<button type={"submit"}> Update Name </button>
			</form>
			<div>
			<button onClick={getCurrentVal} style={{marginTop: '5em'}}> Get Current Contract Value </button>
			</div>
			{currentContractVal}
			{errorMessage}
		</div>
	);
}

export default Name;