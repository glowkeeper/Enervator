#!/bin/sh

./node_modules/.bin/typechain --target ethers  --outDir ../demo/typechain "./build/contracts/*json"
