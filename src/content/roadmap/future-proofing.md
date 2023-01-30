---
title: Future-proofing Ethereum
description: High level overview of how Ethereum is set up for the future
---

Some parts of the roadmap are not necessarily required for scaling or securing Ethereum in the near-term, but set Ethereum up for stability and reliability for centuries to come. These upgrades cement Ethereum as the resilient, decentralized base layer for the future, whatever it may hold.

## Quantum resistance

Some of the cryptography securing present-day Ethereum will be compromised when quantum computing becomes a reality. Although quantum computers are probably decades away from being a genuine threat to modern cryptography, Ethereum is being built to be secure for centuries to come. This means making Ethereum quantum resistant now. The challenge facing Ethereum developers is that the current proof-of-stake protocol relies upon a very efficient signature scheme known as BLS to aggregate votes on valid blocks. This signature scheme is broken by quantum computers, but the quantum resistant alternatives are not as efficient. Similarly, the “KZG” commitment schemes used in many places to generate cryptographic secrets is known to be quantum-vulnerable. Currently, this is circumvented using “trusted setups” where many users generate randomness that cannot be reverse-engineered by a quantum computer. However, the ideal solution would simply be to incorporate quantum safe cryptography instead. There are two leading approaches that could become efficient replacements for the BLS scheme: STARK-based and Lattice-based signing. These are still being researched and prototyped.

## Simpler and more efficient Ethereum

Part of security and sustainability is having a manageable codebase- complexity creates opportunities for bugs or vulnerabilities that can be exploited by attackers. Therefore, part of the roadmap is simplifying Ethereum and removing technical debt - small inefficiencies that have hung around through various upgrades that are no longer needed or can now be improved upon.

There are several updates that will be made to the Ethereum Virtual Machine (EVM) to make it simpler and more efficient. These include removing the SELFDESTRUCT opcode - a rarely used command that is no longer needed and in some circumstances can be dangerous to use, especially when combined with other future upgrades to Ethereum’s storage model. Ethereum clients also still support some old transaction types that can now be completely removed. The way gas is calculated can also be improved and more efficient methods for the arithmetic underpinning some cryptographic operations can be brought in.

Similarly, there are updates that can be made to other parts of present-day Ethereum clients. One example is that current execution and consensus clients use a different type of data compression. It will be much easier and more intuitive to share data between clients when the compression scheme is unified across the whole network.

Read more on [gas](/developers/docs/gas/), the [EVM](/developers/docs/evm/) and [data structures](/developers/docs/data-structures-and-encoding/).
