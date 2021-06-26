---
layout: post
title: A paper on Finscale Stablecoin on Avalanche Blockchain.
image: img/callum-shaw-555357-unsplash.jpg
author: [Devendra]
date: 2021-02-15T07:41:47.149Z
tags:
  - Finscale
  - stablecoin
  - finscale
  - blockchain
  - open source
  - Avalanche
---

## Finscale Stablecoin (FINS)
On Avalanche Blockchain

### Overview
To exchange value over digital platforms there has been a demand of using cryptographic based currencies.

**Price Stability Mechanisms**

Target Price: The Target Price is initially denominated in Euro and starts at 1, translating to a 1:1 Euro soft peg. The FINS Target Price has two primary functions on the Finscale Platform: 
1) It is used to calculate the collateral-to-debt ratio of a CDP, and 
2) It is used to determine the value of collateral assets Finscale holders receive in the case of a global settlement.

Target Rate Feedback Mechanism: In the event of severe market instability, the Target Rate Feedback Mechanism (TRFM) can be engaged. Engaging the TRFM breaks the fixed peg of Finscale, but maintains the same denomination.

**Oracles:** Blockchain accounts (either contracts or users) selected to provide pricefeeds into various components of Finscale Platform.

**Price feeds:** The reference price (AVAX/EURO) for the Avalanche system is provided via an oracle (Chainlink), which collates price data from a number of external price feeds.

### FINS Token Governance
A community of FINS token holders governs the Finscale Protocol, the smart contracts that power FINS. In addition to payment of the Stability Fee on active CDPs, the FINS token plays an important role in the governance of the Finscale Platform. Governance is done at the system level through the election of an Active Proposal by FINS voters. The Active Proposal is the smart contract that has been empowered by FINS voting to gain root access to modify the internal governance variables of the Finscale Platform.

**Single Action Proposal Contracts** are proposals that can only be executed once after gaining root access, and after execution immediately applies its changes to the internal governance variables of the Finscale Platform. After the one-time execution, the SAPC deletes itself and cannot be re-used. This type of proposal is what will be used during the first phases of the system, as it is not very complicated to use, but is less flexible.

**Delegating Proposal Contracts** are proposals that continuously utilize their root access through second layer governance logic that is codified inside the DPC. The second layer governance logic can be relatively simple, such as defining a protocol for holding a weekly vote on updated risk parameters. It can also implement more advanced logic, such as restrictions on the magnitude of governance actions within defined time periods, or even delegating some or all of its permissions further to one or more third layer DPCs with or without restrictions. Any Ava account can deploy valid proposal smart contracts. FINS voters can then use their FINS tokens to cast approval votes for one or more proposals that they want to elect as the Active Proposal. The smart contract that has the highest total number of approval votes from FINS voters is elected as the Active Proposal.

### Asset Backing

FINS token backed by fiat currency: The idea of **asset-pegged** cryptocurrencies was initially popularised in the bitcoin community by Matercoin whitepaper authored by J.R. Willet in January 2012. In this white paper, we focus on applications wherein the fiat value is stored (**store of value**) and transmitted with software that is open source, cryptographically secure, and uses distributed ledger technology, i.e. a true cryptocurrency.

In our solution, fiat pegged cryptocurrency is called “FINS”. All FINS will initially be issued on the Avalanche blockchain so they exist as a cryptocurrency token. Each FINS unit issued into circulation is backed in a 1:1 ratio (i.e. one FINS is one Euro) by the corresponding fiat currency unit held in deposit by Finscale. FINS may be redeemable/exchangeable for the underlying fiat currency pursuant to Finscale terms of service or, if the holder prefers, the equivalent spot value in another cryptocurrency. Once a FINS has been issued, it can be transferred, stored, spent, etc just like any other cryptocurrency. The fiat currency on reserve has gained the properties of a cryptocurrency and its price is permanently stabilized to the price of the fiat currency.

**1:1 reserve ratio between token and associated real-world assets, say Euro.**

Finscale employs a simple but effective approach for conducting **Proof of Reserves** which significantly reduces our counterparty risk as to the custodian of the reserve assets.

## Proof of Reserves: 
FINS Proof of Reserves configuration is novel because it simplifies the process of proving that the total number of FINS in circulation (liabilities) are always fully backed by an equal amount of fiat currency held​.

Each FINS issued will be backed by the equivalent amount of currency unit (one FINS equals
one Euro). By combining the above crypto and fiat accounting processes, we conclude the
“Solvency Equation” for the FINS System.
- **The Solvency Equation is simply FINS = EURO.**

## Goals
* Develop and release a stablecoin i.e. Finscale Stablecoin (FINS) which is pegged to EURO price and backed by some asset (say equivalent EURO).
* Develop Finscale Governance on Finscale Stablecoin (FINS).
* Release the contracts on Avalanche testnet for testing.
* Release the contracts on Mainnet for user interaction

## Milestones
Q1
* Create a custom blockchain on AVA testnet and mainnet.
* Develop Finscale Stablecoin
* Develop governance with Finscale on Ava.
* Releasing the Stablecoin smart contracts on Ava blockchain.
* Building communication layer UI with smart contracts.

Q2 
* First public use case 
* Release of working open source project with a thriving community

Q3
* Working on integrating Smart Contracts as chained logic embedded in service
* Community development 
* Releasing SDKs


