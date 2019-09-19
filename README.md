# Enervator

A cryptocurrency stablecoin, with the currency code EOR, whose value is linked to energy consumption, much like sovereign currencies were once linked to gold. **The primary goal of EOR is to incentivise energy efficiency**. Below describes the process.

_*Enervator is described in more detail in [Steve Huckle's PhD Thesis](https://glowkeeper.github.io/PhDWorks/). The introduction, below, borrows excerpts from that work._

_**The name Enervator is an apparent reference to the token's relation to energy. Additionally, the word itself is a noun meaning 'something that enervates', where 'enervates' is a verb, meaning to weaken; in this context, the token aims to incentivise decreasing energy consumption._

## tl;dr:

Total Supply = World Population, so it will grow or decrease according to annual population fluctuations.

Value = 2017 global average residential electricity price * ( old TPES / current TPES ) / annual global per capita energy use

## Variables

To incentivise lower energy use, the value of Enervator is to reflect two annual consumption metrics. The first is _global per capita energy consumption_, which, according to figures from the [World Bank](https://data.worldbank.org/indicator/EG.USE.PCAP.KG.OE), in 2014, was 1922.488 kilograms of oil equivalent, or 22.35853544 MegaWatt hours (MWh). The second is _total primary energy supply (TPES)_, which according to the International Energy Agency (IEA), in 2016, was 13972 Megatons of oil equivalent (Mtoe), or 162494360000 MWh. Using TPES also has the potential to offer stakeholders incentives for using clean energy, a metric that future iterations of EOR will take into consideration.

Since the basis of the value system of EOR is energy use per capita, it seems prudent to base total supply on world population. According to [Worldometer](https://www.worldometers.info/world-population/), at 2.34pm GMT on September 2nd, 2019, that was 7,727,623,693.

Finally, to make it easy to exchange sovereign currencies for EOR, a sovereign currency price per MWh is needed. Energy prices vary significantly around the world; however, [figures from the IEA](https://www.iea.org/statistics/prices/) show that, for 2017, the _global average residential electricity price_ was US$98.16 per MWh.

## Supply Algorithms

Total Supply = World Population (re-evaluated annually)

## Value Algorithm

The aim is to incentivise lower energy consumption, not energy price variations, so EOR shall use the 2017 global average residential electricity price, at US$98.16 per MWh, as a constant.

A simple value algorithm would be to derive the value of a single EOR by taking the product of US$98.16 and annual global average per capita energy consumption. For example:

1 EOR = 98.16 * 22.35853544 = US$2194.71

Unfortunately, that simple algorithm rewards inefficiency, since the value of EOR would increase as consumption increases. In a world threatened by climate change, that is problematic. Instead, a simple fix that offers incentives for efficiency is to take the reciprocal of the annual global average per capita energy consumption:

1 EOR = 98.16 * ( 1 / 22.35853544 ) = $4.39

For example, imagine the scenario where consumption increases to 30 MWh:

1 EOR = 98.16 * ( 1 / 30 ) = $3.27

However, if consumption falls to 10 MWh, the value of EOR increases:

1 EOR = 98.16 * ( 1 / 10 ) = $9.82

The value algorithm is not quite complete - to further incentivise lower energy consumption, the price of a single EOR will also reflect the difference between old and current TPES figure. At setup, that would have no effect since new equals current; therefore, there is no difference. However, imagine the second annual TPES figures show that, unfortunately, TPES has increased to 200000000000 MWh:

1 EOR = 98.16 * ( 1 / 22.35853544 ) * ( 162494360000 / 200000000000 ) = 98.16 * ( 162494360000 / 200000000000 ) / 22.35853544  = $3.57

Conversely, imagine that TPES decreases to 100000000000 MWh:

1 EOR = 98.16 * ( 162494360000 / 100000000000 ) / 22.35853544 = $7.13

Hence, with a decrease in TPES, the value of EOR increases, and visa-versa.

### Network Value

Given the value of a single EOR at $4.39 and total supply of 7,727,623,693, the total network value of Enervator would be:

7727623693 * US$4.39 = $33,924,268,012

## Deployed Address

Enervator is currently deployed on the [Ethereum testnet Rinkeby](https://rinkeby.etherscan.io/token/0x0e57aa96b255e182896abd98c8015ffa6db9fe42). Coming soon is a frontend for simulating and testing the exchange of FIAT currencies for EOR...

## Licensing

Presently, there are no circumstances where you may copy or reuse the works in this repository, since they form part of Steve Huckle's thesis, which is unpublished, presently. However, that will change with the publication of that thesis, so if you are interested in using Enervator, or you would like to get involved in its development or its promotion to the wider-cryptocurrency community, please email s dot huckle at sussex dot ac dot uk.
