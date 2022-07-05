# NFT Staking App


- Create a copy of this repo by running the below command:

```bash
npx thirdweb create --example nft-staking-app
```

- Deploy the `StakingContract.sol` smart contract by running the below command from the root of the project directory:

```bash
npx thirdweb deploy
```

- Configure the network you deployed in [`index.js`](./src/index.js):

```jsx
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;
```

- Run the project locally:

```bash
npm run dev
```




