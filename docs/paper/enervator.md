_Article_

Steve Huckle <sup>1*</sup>

1 University of Sussex, Sussex House, Falmer, Brighton, BN1 9RH, United Kingdom

Correspondence: s.huckle@sussex.ac.uk; Tel.: +44 (0)1273 606755

Received: (date); Accepted: (date); Published: (date)

## Abstract

This article describes a cryptocurrency, called Enervator, whose aim is to incentivise energy efficiency. There are concerns over the amount of energy consumed by blockchain technology. The author has previously addressed those concerns by showing the benefits blockchain technology brings and by pointing to the necessity of moving to renewable energy, thereby lessening the carbon footprint of the technology. However, this paper addresses those concerns directly by describing Enervator, a cryptocurrency token that gives rewards for reducing energy consumption. The article explains the value mechanisms of the token. It also describes two proof of concept applications, the first shows how the token's parameters affect its value, and the second demonstrates the exchange of the token for sovereign currencies. Enervator is a unique cryptocurrency token that shows how blockchains can help address concerns about how much energy the technology consumes by offering incentives for enabling more energy-efficient behaviour.

## Introduction

[Enervator](https://github.com/glowkeeper/Enervator) (EOR) [^1] is a cryptocurrency whose primary goal is to incentivise energy efficiency. The name Enervator is a reference to the token's relation to energy. The word is a noun meaning 'something that enervates', where 'enervates' is a verb, meaning to weaken; thus, the author considered 'Enervator' as a perfect name for a cryptocurrency whose aim is to reduce energy consumption.

First, this article provides some background to EOR. Then, it describes the design of EOR and discusses the mechanisms by which it derives its value. Afterwards, the design of a proof of concept application that administers EOR, Eneradmin, is discussed. this paper includes examples of the application in use, which show how it is used to set the parameters that change the value of EOR. The paper ends with an analysis of those examples.

## Background

The author's paper, Socialism and the Blockchain [@Huckle_SocialismBlockchain_2016], published in 2016, examines the idea of using a digital asset to measure the value of an electric car by equating the amount of energy consumed by mining on the Bitcoin blockchain with the energy consumed over the lifetime of the vehicle. The paper contends that energy is a useful measure of value because industrial economies are increasingly mechanised. This thesis builds on that idea by using energy consumption as a direct measure of the price of EOR.

Furthermore, Socialism and the Blockchain discusses the problem of the annual energy used by mining on the Bitcoin network, which the paper estimated as equating to the total consumption of the 2.72 million people of Jamaica [@Huckle_SocialismBlockchain_2016]. During 2018, international media outlets also began noting Bitcoin's high energy demand; articles appeared in The Guardian [@Hern_BitcoinEnergyUsage_2018], Forbes [@Lee_BitcoinEnergyConsumption_2018] and The Economist [@G.F_WhyBitcoinUses_2018], to name but a few. By early November 2018, when Nature published a piece about that excessive demand [@Krause_QuantificationEnergyCarbon_2018], the author was moved to reply. He did so for The Conversation [^613], in an article titled: Bitcoin’s high energy consumption is a concern – but it may be a price worth paying [@Huckle_BitcoinHighEnergy_2018], which concluded that Bitcoin's commons-based peer production models and decentralised, trustless operations were a rebuttal to the consumption-led ideology and hierarchical topologies of Neoliberal Capitalism. The piece argued that, by providing an alternative, the network might indirectly drive down the energy use of society. While that could be true, the author was left wondering if he could produce a more immediate response to those criticisms. [Enervator](https://github.com/glowkeeper/Enervator) is that response.

## The Design of Enervator

[Enervator](https://github.com/glowkeeper/Enervator) is an Ethereum-based cryptocurrency that incentivises energy efficiency. It does so by making its value inversely proportional to consumption. Figure 1 outlines the idea and below describes the processes involved.

![Figure 1: A Use Case for Enervator](images/enervatorUseCaseDiagram.png)

The Ethereum community has developed a variety of platform standards, called Ethereum Improvement Proposals (EIPs), which include core protocol specifications, client application programming interfaces and smart contract specifications. If an EIP is approved, it becomes an Ethereum Request for Comment (ERC), which give technical guidance to standard interfaces. An example is ERC20 [^601], a contract interface for creating fungible assets. Fungibility is a term from economics that relates to an items' ability to be exchanged for something else; fungible goods, such as Ether or The U.S. Dollar, are equivalent and interchangeable, whereas non-fungible goods, such as deeds of ownership or collectables, are distinct [@OpenZeppelin_TokensOpenZeppelinDocs_2019]. Therefore, ERC20 derived contracts define tokens that represent a form of digital asset that can act as a medium of exchange on the Ethereum network; [EOS](https://eos.io/) [^602], [Augur](https://www.augur.net/) [^603] and [0x](https://0x.org/) [^604] are three examples of Ethereum tokens.

The ERC777 standard maintains backwards compatibility with ERC20 but includes significant improvements. For example, it has more sophisticated mechanisms for sending and receiving tokens [^605]. Figure 1, below, shows that [Enervator](https://github.com/glowkeeper/Enervator), which has a token symbol EOR, inherits from OpenZeppelin's implementation of ERC777 (OpenZeppelin is a company that provides a set of production-ready contracts for Ethereum distributed application development) [^606].

![Figure 2: Enervator class diagram](./images/enervatorWholeClassDiagram.png)

Figure 2 also shows that several other contracts support the token. [Enervator](https://github.com/glowkeeper/Enervator) also includes a management contract, _EnervatorManager_, which is the default operator of [Enervator](https://github.com/glowkeeper/Enervator) and holds the supply of the token. It also sets the parameters that derive EOR's value. EnervatorManager inherits from the OpenZeppelin contracts [IERC777Sender](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC777/IERC777Sender.sol) and [IERC777Recipient](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC777/IERC777Recipient.sol), which provide definitions of hook functions that _EnervatorManager_ implements. Those functions are called when EOR are sent or received. In particular, `EnervatorManager` implements the `tokensToSend` hook so that it calls a function from the `Exchanger` contract that updates the `BuyDB` contract with details of the tokens sent. As well as the `BuyDB` contract, the `Exchanger` contract maintains links to the `Forex` contract, which has functions that set and get the US Dollar exchange rates for sovereign currencies, and the `DepositDB` contract, which contains sovereign currency deposits. Those deposits govern the amount of EOR that can be bought.

### Defining Value

The value of EOR is to reflect two annual consumption metrics. The first is global per capita energy consumption, which, according to figures from the World Bank, in 2014, was 1922.488 kilograms of oil equivalent, or 22.35853544 MegaWatt hours (MWh) [^607].

The second consumption metric is total primary energy supply (TPES), which according to the International Energy Agency (IEA), in 2016, was 13972 Megatons of oil equivalent (Mtoe), or 162,494,360,000 MWh [@InternationalEnergyAgency_WorldEnergyBalances_2019].

Since the basis of the value of EOR is global energy use per capita, it seems prudent to base total supply on world population. At the time of writing, that was 7,727,623,693 [^608].

Finally, so that it is possible to exchange sovereign currencies for EOR, a sovereign currency price per MWh is needed. Energy prices vary significantly around the world; however, figures from the IEA show that, for 2017, the _global average residential electricity price_ was US$98.16 per MWh [^609].

### Value Algorithms

The value of EOR will reflect energy consumption, not energy price variations, so [Enervator](https://github.com/glowkeeper/Enervator) shall use the 2017 global average residential electricity price, at US$98.16 per MWh, as a constant.

A simple value algorithm would be to derive the value of a single EOR by taking the product of US$98.16 and annual global average per capita energy consumption. For example:

1 EOR = 98.16 * 22.35853544 = US$2194.71

Unfortunately, that simple algorithm rewards inefficiency, since the value of EOR would increase as consumption increases. In a world threatened by climate change, that is problematic. Instead, a simple fix that offers incentives for efficiency is to take the reciprocal of the annual global average per capita energy consumption:

1 EOR = 98.16 * ( 1 / 22.35853544 ) = US$4.39

To further incentivise lower energy consumption, the price of a single EOR also reflects the difference between the old and the current TPES figures. To see the effect, imagine the annual TPES figures show that, unfortunately, TPES has increased from 162,494,360,000 MWh to 200,000,000,000 MWh:

1 EOR = 98.16 * ( 1 / 22.35853544 ) * ( 162494360000 / 200000000000 ) = 98.16 * ( 162494360000 / 200000000000 ) / 22.35853544  = US$3.57

Hence, with an increase in TPES, the value of EOR decreases, and visa-versa.

### Enervator Deployment

At the time of writing, [Enervator](https://github.com/glowkeeper/Enervator) is available on Ethereum's Rinkeby test network [^610]. Figure 3, below, shows Enervator on Rinkeby, shortly after its deployment; amongst the details shown are the physical address of the Enervator contract, the token supply, the number of addresses holding EOR and some initial transfers.

![Figure 3: The initial deployment of EOR](images/enervatorInitialDeployment.png)

## Administering Enervator

The author has developed an application called Eneradmin [^611], which is a proof of concept to demonstrate administering Enervator. Eneradmin is a web-based application written in the Javascript framework React [^611]. It depends on the web browser extension MetaMask [^612], which is cryptocurrency wallet software that manages Ethereum accounts and thereby, allows users to sign and pay for smart contract transactions created by Ethereum applications.

Figure 4 shows that Eneradmin is responsible for managing the supply of EOR, as well as setting the token's value parameters and the sovereign currency US Dollar exchange rates. Enerchanger, the DSR artefact described later, is responsible for converting those exchange rates into their equivalent EOR value.

![Figure 4:  Use Case Diagram for Eneradmin](images/eneradminUseCaseDiagram.png)

The scenario described below models the values described above. Figure 5 shows that, at creation, EOR's total supply was 7,727,623,693 tokens, matching the global population for September 2019. It was initialised with a constant per MWh price of US$98.16, and TPES was set at 162,494,360,000 MWh. Per capita energy was set to 22.36 MWh. That results in the value of a single EOR at US$4.39:

![Figure 5: The initial value of EOR](images/eneradminSetup.png)

Next, Figure 6 shows  shows the author using MetaMask, via Eneradmin, to sign the transaction that changes EOR's setting for global per capita energy consumption to 30 MWh.

![Figure 6: Setting per capita energy consumption at 30 MWh](images/eneradminSetPCE.png)

Consequently, Figure 7 shows that EOR's value has dropped to US$3.27.

![Figure 7: The value of EOR after setting per capita energy consumption at 30 MWh](images/eneradmin30PCE.png)

However, Figure 8 shows that, if global per capita energy consumption falls to 10 MWh, the value of EOR rises to US$9.82.

![Figure 8: The value of EOR after setting per capita energy consumption at 10 MWh](images/eneradmin10PCE.png)

The result is that holders of EOR have a stake in seeing global per capita energy consumption fall, and therefore, it offers incentives for lowering their personal energy use, too.

Figures 9 and 10 show a similar mechanism for TPES. Figure 9 shows that with per capita energy consumption set back to its initial amount of 22.36 MWh, but annual TPES rising to 200,000,000,000 MWh, the value of EOR falls to US$3.57.

![Figure 9: The value of EOR after setting TPES to 200,000,000,000 MWh](images/eneradminTPES200000000000.png)

However, Figure 10 shows that, if TPES falls to 100,000,000,000 MWh instead, EOR's value rises to US$7.13.

![Figure 10: The value of EOR after setting TPES to 100,000,000,000 MWh](images/eneradminTPES100000000000.png)

Hence, energy producers are similarly incentivised to decrease the amount of energy they produce.

## Exchanging Sovereign Currencies for EOR

The author has developed an application called Enerchanger [^614], which is a proof of concept to demonstrate exchanging sovereign currencies for EOR. Similar to Eneradmin, Enerchanger is a web-based application that depends on the web browser extension MetaMask. Figure 7.1 shows that Enerchanger is responsible for taking sovereign currency deposits and exchanging those for EOR.

![Figure 7.1: Use Case for Enerchanger](images/enerchangerUseCaseDiagram.png)

Figure 7.2, below, shows that Enerchanger retrieves exchange rates from the Forex contract in which Eneradmin, described above, stores those rates. It interacts with that contract via an Exchanger contract that also interacts with contracts which store cash deposits and purchases of EOR.

![Figure 7.2: The smart contract architecture of Enerchanger](images/enerchangerClassDiagram.png)

The scenario below imagines an Indian national exchanging her Rupees for EOR. First, Figure 7.3, below, shows the exchange rates that Eneradmin has stored. These are the rates per U.S. Dollar, not per EOR.

![Figure 7.3: Eneradmin Exchange Rates](images/eneradminExchangeRates.png)

Next, Figure 7.4 shows a scenario whereby an Indian citizen uses the functionality of Enerchanger to deposit 10,000 Rupees, which she can later exchange for EOR. The deposit shown is a simulation of a web-based service that could easily be fulfilled by an online payment service provided by a company such as Visa, Mastercard, or PayPal.

![Figure 7.4: Enerchanger depositing 10,000 Rupees](images/enerchangerDepositRupees.png)

Figure 7.5 shows the Indian Citizen about to sign the transaction that exchanges her deposit for EOR. When buying EOR, Enerchanger displays the deposit reference, the type of currency deposited and the amount deposited. It also displays the U.S. Dollar exchange rate for that currency, the U.S. Dollar value of EOR and the deposited currency to EOR exchange rate. Finally, displayed is the amount of EOR to be bought.

![Figure 7.5: Enerchanger exchanging 10,000 Rupees for 32.01 EOR](images/enerchangerBuyRupees.png)

Figure 7.6 shows the Indian Citizen's MetaMask wallet container her newly bought 32.01 EOR.

![Figure 7.6: MetaMask showing the 32.01 EOR](images/enerchangerEORAccount.png)

Finally, Figure 7.7 shows that transfer on the Rinkeby blockchain explorer service, Etherscan (it is the first transfer displayed) [^701].

![Figure 7.7: Etherscan showing the 32.01 EOR transfer](images/enerchangerEtherscan.png)

## Analysis

[Enervator](https://github.com/glowkeeper/Enervator) demonstrates that blockchains can help address concerns about how much energy the technology consumes by offering incentives for enabling more energy-efficient behaviour. Indeed, [Enervator](https://github.com/glowkeeper/Enervator) is an exciting idea that has the potential to have a positive impact on energy efficiency and thereby increase the likelihood of humanity achieving a degree of longevity.

Several factors explain how [Enervator](https://github.com/glowkeeper/Enervator) might successfully help lower energy consumption. Imagine that both consumers and producers hold EOR and that their efficiencies result in the value of EOR rising. In such a case, consumers benefit directly, and producers are compensated even though consumers are no longer consuming their products. Thus, by benefiting consumers, producers and the climate, the value mechanisms of [Enervator](https://github.com/glowkeeper/Enervator) help increase 'total social welfare' [@Policonomics_SurplusPoliconomics_2017].

Ultimately, since the effect of an individual lowering their consumption will have next-to-no sway on global per capita energy consumption, the success of EOR will rely on network externalities [@Katz_SystemsCompetitionNetwork_1994]. Many people must hold the token, but that should amplify uptake. After all, existing holders of EOR will benefit when the number of other people holding EOR increases because that should drive the energy-efficient behaviour necessary to increase the value of the token. In turn, when people see EOR's price rising, that must result in more people buying the token, leading to more people becoming energy efficient, further increasing the value of EOR, and so on. Hence, the network effects of EOR realise the benefits of energy efficiency because its incentives help to internalise the negative external environmental impacts caused by energy consumption, consequences that have lead to many governmental organisations around the world declaring an ecological emergency [@BBCNews_UKParliamentDeclares_2019]. Thus, EOR offers people an opportunity to believe that their actions are no longer inconsequential in addressing climate change. That has to be positive.

Is wide-scale adoption realistic? An October 2019 survey found that 2% of American adults hold Bitcoin. Additionally, a further 7.3% were planning on buying some [@SarahBauder_LargestBitcoinOwnership_2019]. While those numbers may not appear significant, consider that cryptocurrencies are just ten years old; when the Internet was of a similar age, global penetration was around 5.8%, whereas now, at forty years old, the Internet is used by over 50% of the planet [@CaneIslandAlternativeAdvisors_WhyBitcoinNever_2019]. So perhaps wide-scale adoption of EOR is not impossible.

## Summary

This article examines whether blockchains can help address concerns about energy consumption. It investigates that through the lens of the cryptocurrency token [Enervator](https://github.com/glowkeeper/Enervator), whose primary goal is to incentivise energy efficiency.

The article gave some background to EOR and described its design. Then it described the design of the proof of concept that administers EOR, Eneradmin. It explained examples of that application in use and showed how it can be used to set the parameters that change the value of EOR in such a manner as to increase or decrease the token's value, depending on the decrease or increase of global per capita energy consumption and TPES. Then this article gave some background to the proof of concept Enerchanger and described its design. It showed examples of that application in use and how it might be used to deposit Indian Rupees and exchange those for EOR. The chapter ended with an analysis of those examples, whereby it found that blockchains, through EOR, can indeed help address concerns about energy consumption. However, that depends on network externalities, because only wide-scale adoption of EOR will see that potential realised.

[^1]: The source code for [Enervator](https://github.com/glowkeeper/Enervator) is available on GitHub at https://github.com/glowkeeper/Enervator
[^601]: The ERC20 token standard is described at https://github.com/ethereum/eips/issues/20

[^602]: EOS has the currency code EOS. You can read more about EOS a <https://eos.io/>
[^603]: Augur has the currency code REP. You can read more about Augur at https://www.augur.net/
[^604]: 0x has the currency code ZRX. You can read more about Ox at https://0x.org/.

[^605]: The ERC777 token standard is described at https://github.com/ethereum/eips/issues/777
[^606]: OpenZeppelin's ERC777 contract is defined at https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC777/ERC777.sol

[^607]: World Bank statistics for energy use per capita are available at https://data.worldbank.org/indicator/EG.USE.PCAP.KG.OE
[^608]: World population available at https://www.worldometers.info/world-population/
[^609]: IEA statistics for global average residential electricity price are available at https://www.iea.org/statistics/prices/
[^610]: The address of the of the [Enervator](https://github.com/glowkeeper/Enervator) token is on the GitHub repository at https://github.com/glowkeeper/Enervator
[^611]: The address of the live demonstration of the Eneradmin proof of concept is available on the [Enervator](https://github.com/glowkeeper/Enervator) GitHub repository at https://github.com/glowkeeper/Enervator

[^611]: React is available at https://reactjs.org/
[^612]: MetaMask is available at https://metamask.io/
[^613]: The Conversation - https://theconversation.com - is a not-for-profit organisation. They source topical content, written by academics, that is written in plain English and aimed at the general public.

[^614]: The address of the live demonstration of the Enerchanger proof of concept is available on the [Enervator](https://github.com/glowkeeper/Enervator) GitHub repository at https://github.com/glowkeeper/Enervator
