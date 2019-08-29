# StandardCoin

A cryptocurrency token, STC, whose value is linked to energy, much like sovereign currencies were once linked to gold.

First, the value of STC is pegged to the annual global average energy consumption per capita. Secondly, the price per MWh is derived from the global average residential electricity price. Below describes the process.

As of August 2019, the [latest figures from the World Bank](https://data.worldbank.org/indicator/EG.USE.PCAP.KG.OE), for 2014, showed that the annual global average energy consumption per capita was 1922.488 kilograms of oil equivalent, which equates to 22.35853544 MegaWatt hours (MWh). Similarly, [statistics from the International Energy Agency (IEA)](https://www.iea.org/statistics/prices/), for 2017, showed that the global average residential electricity price was US$98.16 per MWh. Those were the figures used to initialise STC.

A simple value mechanism for StandardCoin would have been to equate a single STC to that global average per capita energy consumption and then derive the token's worth by finding the product of that average and the global average residential electricity price. Unfortunately, that simple metric rewards inefficiency, since the value of STC would increase as consumption increases. In a world threatened by climate change, that is problematic. A simple fix is to measure the value of STC against the inverse of the amount of energy consumed. By doing so, STC incentivises efficiency because less consumption increases the value of the token. Hence, we have:

1 STC = ( 1 / 22.35853544 ) * 98.16  = $4.39
