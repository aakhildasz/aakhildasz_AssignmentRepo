# Lottery Smart Contract

This repository contains a simple lottery smart contract written in Solidity. The contract allows users to enter the lottery by sending Ether (ETH) to the contract. After a certain period, the manager of the contract can randomly pick a winner who will receive all the Ether collected in the contract.

## Features

- **Enter the Lottery**: Users can participate in the lottery by sending at least 0.05 ETH.
- **Random Winner Selection**: The contract uses a pseudo-random function to pick a winner.
- **Manager Role**: The contract deployer is designated as the manager, who has the authority to pick the winner.
- **Transparency**: Anyone can view the list of players who entered the lottery.

## Prerequisites

- **Solidity Version**: The contract is written in Solidity version `^0.8.0`.
- **Ethereum Wallet**: You'll need an Ethereum wallet with some ETH to interact with the contract.

## Contract Overview

### Manager

The manager is the address that deploys the contract and has the special privilege to pick the winner.

### Entering the Lottery

To enter the lottery, a user must call the `enter` function and send a minimum of 0.05 ETH. The user's address will then be added to the list of players.

### Picking a Winner

Only the manager can pick the winner by calling the `pickWinner` function. This function uses a pseudo-random algorithm to select a winner from the players array. The entire balance of the contract is transferred to the selected winner, and the players array is reset for the next round.

### Retrieving Players

The `getPlayers` function returns the list of addresses that have entered the lottery.

## Functions

- **constructor**: Initializes the contract by setting the deployer's address as the manager.
- **enter**: Allows users to enter the lottery by sending ETH. Requires a minimum of 0.05 ETH.
- **getRandomNumber**: Generates a pseudo-random number using block difficulty, timestamp, and the players array (private).
- **pickWinner**: Selects a random winner from the players array and transfers the entire balance of the contract to the winner (restricted to the manager).
- **restricted**: A modifier to restrict function access to only the manager.
- **getPlayers**: Returns the list of addresses that have entered the lottery.

## Usage

1. **Deploy the Contract**: Deploy the contract on an Ethereum network using a Solidity IDE like Remix or using Truffle/Hardhat.

2. **Enter the Lottery**: Users can enter by calling the `enter` function with at least 0.05 ETH.

3. **Pick a Winner**: Once the lottery has enough participants, the manager can call the `pickWinner` function to select a winner.

## Security Considerations

- The random number generation in this contract is **not secure** for real-world use cases. It's based on block variables, which can be manipulated by miners. For a secure random number generator, consider using Chainlink VRF or another secure method.
- Only the manager can pick the winner. This centralization may not be suitable for all use cases.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
