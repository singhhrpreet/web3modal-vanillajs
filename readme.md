# Web3Modal Vanilla

**Working Example**: https://web3modal-vanillajs.herokuapp.com/

For developers using Web3 without any frontend frameworks such as React, Vue or Next.

Web3Modal & WalletConnect already had bundled files avaiable from CDNs allowing you to use Web3Modal without any js frameworks or "webpackifying" your project.
But there was no documented way of using Coinbase Wallet. This exact requirement spawned this project.

 - Example of how to make it all work is in **index.html**
 - To authenticate with Coinbase wallets, this project is using [walletlink](https://walletlink.org/).
 - For which you can find a bundled file named as **walletlink.bundle.js**. 
 - source file is **src/index.js**

---

You can build the bundle file again. Run following commands:
1. npm install
2. webpack

Node version used: v16.1.0
NPM version: 7.11.2