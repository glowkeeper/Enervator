# StandardCoin

A cryptocurrency stablecoin, STC, whose value is linked to energy, much like sovereign currencies were once linked to gold.

First, the value of STC is pegged to the annual global average energy consumption per capita. Secondly, the price per MWh is derived from the global average residential electricity price. Below describes the process.

As of August 2019, the [latest figures from the World Bank](https://data.worldbank.org/indicator/EG.USE.PCAP.KG.OE), for 2014, showed that the annual global average energy consumption per capita was 1922.488 kilograms of oil equivalent, which equates to 22.35853544 MegaWatt hours (MWh). Similarly, [statistics from the International Energy Agency (IEA)](https://www.iea.org/statistics/prices/), for 2017, showed that the global average residential electricity price was US$98.16 per MWh.

A simple value mechanism for StandardCoin would have been to equate a single STC to that global average per capita energy consumption and then derive the token's worth by finding the product of that average and the global average residential electricity price. Unfortunately, that simple metric rewards inefficiency, since the value of STC would increase as consumption increases. In a world threatened by climate change, that is problematic. A simple fix is to measure the value of STC against the inverse of the amount of energy consumed. By doing so, STC incentivises efficiency because less consumption increases the value of the token. Using the figures above, we have:

1 STC = ( 1 / 22.35853544 ) * 98.16  = $4.39

Finally, since STC is pegged to per capita energy use, its total supply must reflect total global energy consumption. According to the International Energy Agency, in 2015, [global consumption was 9,384 Megatons of oil equivalent (Mtoe)](https://www.iea.org/publications/freepublications/publication/KeyWorld2017.pdf), which equates to 109135.92 Terra Watt hours (TWh), or 109135920000 MWh. Hence the total supply of STC becomes:

109135920000 / 22.35853544 = 4881174810.97

Rounding up gives 4,881,174,811, or just under five billion coins. With the value of a single STC at $4.39, as described above, the total network value of StandardCoin is:

4,881,174,811 * $4.39 = $21,428,357,420.3

Which approximates to US$21.4 billion.

There are some mechanisms implied by the discussion above. First, in order for incentivisation to work, the amount of energy to which STC is pegged must differ with changes in the annual global average per capita consumption. Secondly, the price per MWh will also vary with changes in the annual global average electricity price. Thirdly, total supply must reflect changes in total global energy consumption.
