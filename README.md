# StandardToken

A cryptocurrency stablecoin, STK, whose value is linked to energy, much like sovereign currencies were once linked to gold. The primary goal of STK is to incentivise energy efficiency. Below describes the process.

## tl;dr:

STK Total Supply = The world population at 2.34pm GMT on September 2nd, 2019

The value of a single STK = 2017 global average residential electricity price * ( 1 / annual global per capita energy use ) * ( current annual TPES / new annual TPES)

### STK Variables

The total supply of STK will use the world population at at 2.34pm GMT on September 2nd, 2019, which, according to [Worldometer](https://www.worldometers.info/world-population/), was 7,727,623,693.

To incentivise lower energy use, the value of StandardToken is to reflect two annual consumption metrics. The first is _global per capita energy consumption_, which, according to figures from the [World Bank](https://data.worldbank.org/indicator/EG.USE.PCAP.KG.OE), in 2014, was 1922.488 kilograms of oil equivalent, or 22.35853544 MegaWatt hours (MWh). The second is _total primary energy supply (TPES)_, which according to the International Energy Agency (IEA), in 2016, was 13972 Megatons of oil equivalent (Mtoe), or 162494360000 MWh. Using TPES also has the potential to offer stakeholders incentivises for using clean energy, a metric that future iterations of STK will take into consideration.

Finally, to make it easy to exchange sovereign currencies for STK, a sovereign currency price per MWh is needed. Energy prices vary significantly around the world; however, [figures from the IEA](https://www.iea.org/statistics/prices/) show that, for 2017, the _global average residential electricity price_ was US$98.16 per MWh.

### STK Value Algorithm

The aim is to incentivise lower energy consumption, not price variations, so STK shall use the 2017 global average residential electricity price of US$98.16 as a constant.

A simple value algorithm would be to derive the value of a single STK by taking the product of US$98.16 and annual global average per capita energy consumption. For example:

1 STK = 98.16 * 22.35853544 = US$2194.71

Unfortunately, that simple algorithm rewards inefficiency, since the value of STK would increase as consumption increases. In a world threatened by climate change, that is problematic. Instead, a simple fix that incentivises efficiency is to take the reciprocal of the annual global average per capita energy consumption:

1 STK = 98.16 * ( 1 / 22.35853544 ) = $4.39

For example, imagine the scenario where consumption increases to 30 MWh:

1 STK = 98.16 * ( 1 / 30 ) = $3.27

However, if consumption falls to 10 MWh, the value of STK increases:

1 STK = 98.16 8 ( 1 / 10 ) = $9.816

The algorithm is not quite complete - to further incentivise lower energy consumption, the price of a single STK will also reflect the difference between new and existing annual TPES figures. At setup, new equals existing, so the value of a single STK shall remain at $4.39. However, imagine the second annual TPES figures show that, unfortunately, TPES has increased to 200000000000 MWh:

1 STK = 98.16 * ( 1 / 22.35853544 ) * ( 162494360000 / 200000000000 ) = $3.57

Conversely, imagine that TPES decreases to 100000000000 MWh:

1 STK = 98.16 * ( 1 / 22.35853544 ) * ( 162494360000 / 100000000000 ) = $7.13

Hence, with a decrease in total energy supply, the value of STK increases and visa-versa.

### Network Value

Given the value of a single STK at $4.39, the total network value of StandardToken would be:

7727623693 * US$4.39 = $33,924,268,012.3

That approximates to US$34 billion.

_StandardToken was first described in [Steve Huckle's PhD Thesis](https://glowkeeper.github.io/PhDWorks/). The above introduction to STK borrows excerpts from that work._
