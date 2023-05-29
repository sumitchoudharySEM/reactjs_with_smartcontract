# Solidity Smart Contract with React Frontend
This project contains a Solidity smart contract and a React frontend that allows users to interact with the contract. The contract provides functions to set and get a name.

# Installation
Clone the repository: git clone <repository_url>
Navigate to the project directory: cd <project_directory>
Smart Contract
Ensure you have Solidity installed.
Open the contracts/name.sol file to view the smart contract code.
React Frontend
Ensure you have React.js installed.
Navigate to the frontend directory: cd frontend
Install the dependencies: npm install

# Usage
Smart Contract
To deploy the smart contract and interact with it, follow these steps:

Deploy using Remix IDE:
Open the Remix IDE in your web browser.
In Remix, create a new Solidity file and copy the contents of contracts/NameContract.sol into the editor.
Compile the contract in Remix.
Deploy the contract on a development blockchain network or a testnet in Remix. Take note of the deployed contract address and ABI.
React Frontend
To run the React frontend and connect it to the deployed smart contract, follow these steps:

Navigate back to the project root directory: cd ..
Open the frontend and update the REACT_APP_CONTRACT_ADDRESS and REACT_APP_CONTRACT_ABI with the values obtained from the smart contract deployment.
Start the React development server: npm start
Open your web browser and visit http://localhost:3000 to access the frontend.
Connect Wallet
Ensure you have a compatible wallet like MetaMask installed in your browser.
Connect your wallet to the application by clicking the "Connect Wallet" button in the frontend.

# Functionality
The React frontend provides the following functionality to interact with the smart contract:

Set Name: Enter a name in the input field and click the "Set Name" button to set the name in the smart contract.
Get Name: Click the "Get Name" button to retrieve and display the currently stored name from the smart contract.