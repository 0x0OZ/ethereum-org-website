---
title: Wrapped Ether (WETH)
description: An introduction to Wrapped Ether (WETH)—an ERC20-compatible version of Ether (ETH). 
---
---
# What Is Wrapped Ether (WETH)? {#what-is-wrapped-ether-weth}    
Wrapped Ether (WETH) is an ERC-20 token representing Ethereum’s native Ether (ETH) coin. As a native cryptocurrency, the use of ETH is limited to transferring value and paying for computation on the Ethereum network. Using ETH in dapps is technically difficult because of its limitations. 

Transforming ETH into an ERC-20 token (WETH) increases the number of things you can do with it. Because there's significant demand to use ETH in the ecosystem, wrapped Ether (WETH) solves this problem by providing an ERC20-compliant version of ETH to use in dapps or swap with other ERC-20 tokens.

Today, **nearly 3% of the circulating ETH supply is locked in the WETH token contract** making it one of the most popular smart contracts. WETH is especially popular with users interacting with applications in Ethereum's Decentralized Finance (DeFi) ecosystem. 

## What are wrapped tokens? {#intro-to-wrapped-tokens} 

A wrapped token is a token whose value is pegged to an underlying asset. An amount of the original asset is deposited into a smart contract—similar to a digital bank vault—that mints an equal amount of wrapped tokens. The vault holds the deposit until you're ready to exchange your wrapped tokens for the original asset.

Wrapping ETH today requires depositing it in a smart contract which creates an amount of wrapped ETH (WETH) tokens equal to the original deposit. You can also “unwrap” ETH by sending WETH tokens to the contract and receiving ETH in return.

In all cases, the conversion between WETH and ETH is always completed at a 1:1 ratio. Since the smart contract locks up ETH before minting WETH tokens, the value of WETH tokens in circulation is backed by ETH held in reserves. This keeps the prices of WETH and ETH relatively equal and ensures you can always swap both assets without realizing a loss. 

## Why do we need to wrap ETH? {#why-do-we-need-to-wrap-eth} 

Common use cases for wrapping tokens include extending the functionality of a token and allowing the use of a token outside its native blockchain. With Wrapped Ether (WETH), the goal is to make ETH more useful by giving it the features of an ERC-20 token. 

For context, [ERC-20](https://www.gemini.com/en-US/cryptopedia/erc20-token-standard-ethereum) defines a standard interface for fungible tokens, so anyone can create tokens that interact seamlessly with applications and other tokens in Ethereum's ecosystem.  But, as the creation of Ether predates the ERC-20 standard, ETH tokens don’t conform to this specification. This means you can't easily exchange ETH for other ERC-20 tokens or use ETH coins in dapps built according to the ERC-20 standard. 

Wrapped Ether (WETH) was created to **make ETH compatible with applications and tokens implementing ERC-20 interfaces**. WETH also extends the functionality of native ETH token and gives you the opportunity to do the following:

- **Exchange ETH for ERC-20 tokens**: You cannot exchange ETH directly for other ERC-20 tokens (not without introducing trusted third parties or complex technical processes). WETH is a representation of Ether that complies with the ERC-20 fungible token standard and can be exchanged 1:1 for other ERC-20 tokens. 

- **Use ETH in dapps**: Because ETH isn’t ERC20-compatible, developers would need to create separate interfaces (one for ETH and another for ERC-20 tokens) in dapps. Wrapping ETH in ERC-20 standards using WETH removes this obstacle and enables developers to handle ETH and other tokens within the same dapp. 

- **Interact with DeFi applications**: DeFi enables complex use-cases like [yield farms](https://blockworks.co/what-is-yield-farming-what-you-need-to-know/) and [automated market makers](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers) (AMMs), but these applications need access to funds in your wallet to work. With ERC-20 tokens like WETH, you can approve a smart contract to deduct WETH tokens from your balance up to a predefined limit (a feature that's unavailable when using native ETH).

## Wrapped Ether (WETH) vs Ether (ETH): What is the difference? {#weth-vs-eth-differences}
Although they look similar, Wrapped Ether (WETH) and Ether (ETH) have subtle differences you should be aware of. For example, the Ethereum protocol recognizes Ether—but it has no native knowledge of WETH (and ERC-20 tokens), causing both assets to behave differently. We have listed other important distinctions between ETH and WETH tokens below: 

|            | **Ether (ETH)**                                                                                                                                                                                                                 | **Wrapped Ether (WETH)**                                                                                                                                                                                                                                                                                    |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Supply     | **The supply of ETH is managed by the protocol.** The supply of ETH increases when Ethereum validators earn rewards for processing transactions and creating blocks.                           | **WETH is an ERC-20 token whose supply is managed by a smart contract.** New units of WETH are issued by the contract after it receives ETH deposits from users.                                                                                                                                        |
| Ownership  | **Ownership of ETH is defined and guaranteed by the Ethereum blockchain.** For example, protocol rules ensure you can always spend from an account’s ETH balance if you control the [private key](/glossary/#private-key).  | **Ownership of WETH depends on the WETH token contract.** The contract defines ownership of WETH tokens and determines the conditions under which you can access your WETH balance.                                                                                                                                            |
| Transfer   | The transfer of ETH is intrinsic to the Ethereum protocol. Transfers are recorded on-chain and publicly verifiable.                                                                                                         | **The transfer of WETH tokens occurs inside the WETH token contract and [isn’t directly recorded on-chain](https://coinmarketcap.com/alexandria/glossary/internal-transaction).** The blockchain only records the transaction authorizing the smart contract to deduct from the sender’s WETH balance.  |
| Gas        | Ether (ETH) is the accepted unit of payment for computation on the Ethereum network. Gas fees are denominated in gwei (a unit of Ether).                                                                                    | You cannot pay gas for a transaction using WETH tokens (except when using a third-party relayer service).                                                                                                                                                                                              |
### Security considerations for using WETH {#weth-security-considerations}

As Ethereum's native asset, the security of ETH is guaranteed by the protocol—no one can steal your funds unless they have access to your private keys. Even in a [51% attack](https://academy.binance.com/en/glossary/51-percent-attack), attackers cannot create forged transactions to transfer ETH from your address without approval. 

In comparison, Wrapped Ether (WETH) is not issued and secured by the Ethereum network and using it may involve certain risks. Still, WETH is considered a safe asset to own and use (compared to similar wrapped tokens) due to its unique qualities:

- **Simplistic design**: The canonical WETH smart contract has less than 60 lines of code and lacks complexities that can produce unintended bugs or exploitable vulnerabilities. 
- **Zero admin controls**: Your interaction with WETH is fully **trustless** as no one has administrative control of the WETH token contract. As such, you don't have to worry about a malicious admin arbitrarily minting or burning tokens, censoring attempts to withdraw your ETH, or blacklisting transfers. 
- **Non-upgradeable**: The WETH contract is non-upgradeable (unlike many variants) and has remained the same since its launch many years ago. 
- **Extensively audited and tested**: Members of the Ethereum community (including auditors, developers, and security researchers) have tested the security of the WETH contract before *and* after its launch. The WETH contract has also passed formal verification, which is considered the highest security standard for Ethereum-based applications. 

Now, while the WETH contract is considered very secure, some hypothetical attack scenarios exist including:

- **An attacker mints WETH tokens without depositing ETH (the equivalent of printing money out of thin air)**. If the attacker successfully redeems these tokens for ETH, other owners may be unable to withdraw their ETH deposits. 

- **An attacker exploits a vulnerability that allows them to drain the WETH contract of ETH deposited by users**. This would leave users with valueless WETH tokens without any backing. 

- **A smart contract bug prevents users from unwrapping WETH and withdrawing ETH deposits.** While the chances of this happening are low, it is still a feasible scenario that could affect the safety of WETH assets. 

Note that these security considerations apply **only if you’re using WETH issued on Ethereum**. [Blockchain bridges](/bridges/) make ETH usable on a non-Ethereum blockchain by issuing a variant of WETH compatible that blockchain’s technical standards.

But this introduces additional security issues other than those described previously. For example, you must also believe the bridge is secure against attacks, the bridge operator(s) won’t freeze or steal your funds, etc.  

## Frequently Asked Questions about Wrapped Ether (WETH) {#weth-frequently-asked-questions} 

**Are ETH and WETH the same?**

No. Ether (ETH) is the native coin of the Ethereum blockchain, used as a unit of payment on the Ethereum network (including paying for transaction fees). Wrapped Ether (WETH) is an ERC20-compliant version of ETH primarily designed to make ETH tokens compatible with applications built on the ERC-20 standard. 

**How does Wrapped Ether (WETH) work?**  

Users wrap ETH by sending it to a smart contract that mints an equivalent amount of Wrapped ETH (WETH) in return. Another way to get wrapped ETH is to swap ETH for WETH tokens on a decentralized exchange (DEX). 
Unwrapping ETH requires a similar workflow: send WETH to the smart contract and have an equivalent amount of ETH sent to your address. You can also unwrap ETH by swapping WETH for ETH directly using a decentralized exchange.  

**Do you pay to wrap/unwrap ETH?**

No. You don’t pay to wrap ETH into WETH, as the assets are converted at a 1:1 ratio. However, interacting with the WETH contract to wrap/unwrap ETH involves sending an on-chain transaction—and this requires paying a gas fee. DEX platforms also charge for gas when executing swaps between ETH and WETH (or vice-versa).

**Can I pay for gas with WETH?**

No. Ethereum nodes only accept ETH as payment for gas fees. You can only pay for gas in WETH only if using a third-party relayer that accepts the (signed) transaction off-chain and broadcasts it on-chain on your behalf. Typically, [relayers](https://blog.kyros.ventures/2022/07/24/meta-transaction-relayer-an-overview/) pay the gas fee for a relayed transactions from their ETH balance and accept payment for the service in ERC-20 tokens like WETH. 

**Are WETH and ETH the same price?**

WETH is pegged 1:1 to the price of ETH, so the value of both assets are usually equal at any time. This peg is maintained by ensuring that every unit of WETH is backed by ETH held in reserves. Forces of supply and demand also keep the prices of ETH and WETH relatively equal: 

- If WETH were cheaper, more people would buy it and convert it to the more expensive ETH at a 1:1 ratio to make profit. This would drive up demand for WETH and increase the price of WETH tokens. 

- If WETH is more expensive, more people would buy ETH and convert it to WETH to sell at a profit. As the supply of WETH increases, the value of WETH tokens would drop—keeping the peg relatively stable. 

**Why do people use WETH instead of ETH?**

WETH was created because the ETH token doesn't follow with the ERC-20 technical specification, making it difficult to use in decentralized applications (dapps). Unlike Ether, WETH follows the ERC-20 standard and is compatible with applications, such as decentralized exchanges and wallets, that support ERC-20 interfaces. WETH is also tradeable for other ERC-20 tokens while directly exchanging ETH for ERC-20 tokens requires complex accounting. 

**Is WETH safe?**

ETH is the safest asset because it is part of the Ethereum protocol, whereas WETH is defined in a smart contract which could feasibly be hacked. Nevertheless, WETH is generally considered secure because it is based on a simple, battle-tested smart contract. The WETH contract has also beeen formally verified, which is the highest security standard for smart contracts on Ethereum. 

**Why am I seeing different types of WETH?**

Besides the {canonical implementation of WETH](https://blog.0xproject.com/canonical-weth-a9aa7d0279dd) described om this page, there are other variants in the wild. These may be custom tokens created by dapp developers or versions issued on other blockchains and may behave differently or have different security properties. **Always double-check the token information to know which WETH implementation you're interacting with.**

**What can I do with WETH?**

WETH can be used with any decentralized application built on the ERC-20 standard. WETH is particularly useful for decentralized finance (DeFi) applications—you can exchange WETH for other tokens on a DEX, use it as collateral to borrow funds, or supply liquidity to lending platforms in order to earn interest. 

## Further reading {#further-reading}
- [WTF is WETH?](https://weth.io/)
- [What Is Wrapped Ether (WETH) and How to Wrap It?](https://academy.binance.com/en/articles/what-is-wrapped-ether-weth-and-how-to-wrap-it)
- [What are the cheapest ways to wrap ETH into WETH?](https://medium.com/@therugpush/cheapest-way-to-wrap-eth-into-weth-446cf1ddccf7) 
- [WETH token information on Etherscan](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2)
- [Formal Verification of WETH](https://zellic.io/blog/formal-verification-weth)


