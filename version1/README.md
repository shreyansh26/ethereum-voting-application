ethereum-voting-application - Version1
=======================================

## Dependecies
1. ethereumjs-testrpc (For testing purposes)   
  `npm install ethereumjs-testrpc`

2. web3  
  `npm install web3`   
  `npm install ethereum/web3.js --save`

3. solc (Solidity Compiler)  
  `npm install solc --save`

4. sleep  
  `npm install sleep --save`

## To run
1. In one terminal, run `testrpc`

2. In a second terminal, go to the folder **version1** and run `node app.js`. This initialises the contract.

3. Copy the obtained address of smart contract in the **index.js** file.

4. Then start a local server with `python -m SimpleHTTPServer`

5. Then head to `localhost:8000`

6. Sync **MetaMask** with some private key from your `testrpc`.

7. Apart from the webpage, the current no. of votes can be checked by `node checkvotes.js *Address of smart contract*`
