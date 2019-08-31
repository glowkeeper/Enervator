# StandardToken

A cryptocurrency stablecoin, STK, whose value is linked to energy, much like sovereign currencies were once linked to gold.

tl;dr: the algorithms for STK are as follows:

total supply = annual total primary energy supply (TPES) / annual global per capita energy use.

token value = ( 1 / annual global per capita energy use ) * global average residential electricity price * ( current TPES / new TPES)

---
The value of StandardToken is to reflect annual global per capita energy use, which, according to the [latest figures from the World Bank](https://data.worldbank.org/indicator/EG.USE.PCAP.KG.OE), in 2014, was 1922.488 kilograms of oil equivalent, equating to 22.35853544 MegaWatt hours (MWh). Using global per capita energy as a metric implies two broadly equivalent choices for calculating the total supply of STK, 1) world population and 2) annual total primary energy supply (TPES). STK uses the latter as it may offer opportunities to incentivise stakeholders to consume clean energy, a matter that will be given more consideration in future iterations of StandardToken. According to the International Energy Agency (IEA), in 2016, TPES was 13972 Megatons of oil equivalent (Mtoe), which equates to 162494360000 MegaWatt hours (MWh). Finally, to make it easy to exchange sovereign currencies for STK, a sovereign currency price per MWh is needed. Energy prices vary significantly around the world; however, [figures from the IEA](https://www.iea.org/statistics/prices/) show that; in 2017, the global average residential electricity price was US$98.16 per MWh [^2].

Below describes how STK employs the figures above. First, STK calculates initial supply of the token by dividing annual TPES by the annual global average energy consumption per capita:

162494360000 / 22.35853544 = 7267665649.93

Rounding gives 7,267,665,650, or just over 7.25 billion tokens, a figure that broadly agrees with [those available for the global population](World population available at https://www.worldometers.info/world-population/), which, according to Worldometers, in 2016 was 7,464,022,049. Subsequently, total supply will grow and diminish relative to the annual figures for TPES.

A simple value mechanism for StandardToken would be to equate a single STK to that annual global average per capita energy consumption and then derive the token's worth by finding the product of that average and the annual global average residential electricity price. Using the figures above, that means:

1 STK = 22.35853544 * 98.16 = US$2194.71

Unfortunately, that simple metric rewards inefficiency, since the value of STK would increase as consumption increases. In a world threatened by climate change, that is problematic. Instead, a simple fix that rewards efficiency is to measure the value of STK against the inverse of the amount of energy consumed:

1 STK = ( 1 / 22.35853544 ) * 98.16  = $4.39

However, the algorithm for deriving the value of STK is not quite complete; as explained above, the price of a single STK will also reflect the difference between current and new TPES figures. Using the figures above, that gives:

1 STK = ( 1 / 22.35853544 ) * 98.16 * ( 7267665650 / 7267665650) = $4.39

Imagine that annual energy production decreases to 7,000,000,000. Then:

1 STK = ( 1 / 22.35853544 ) * 98.16 * ( 7267665650 / 7000000000) = $4.56

So with a decrease in energy production, the value of STK increases. However, the real power of that algorithm might be the opportunity to positively reflect renewable energy, thus offering incentives for STK holders to use and produce clean energy. That renewable weighting will come in future iterations of STK.

Finally, with the value of a single STK at $4.39, the total network value of StandardToken is:

7267665650 * $4.39 = $31,905,052,203.5

That approximates to US$31.9 billion.
