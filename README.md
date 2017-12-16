ethereum-voting-application
============================

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
1. Go to the root of the project and run `node app.js`. This initialises the contract.
2. Copy the obtained address of smart contract in the **index.js** file.
3. Then start a local server with `python -m SimpleHTTPServer`
4. Then head to `localhost:8000`
5. Apart from the webpage, the current no. of votes can be checked by `node checkvotes.js *Address of smart contract*`
