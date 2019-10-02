#!/bin/sh

./node_modules/.bin/typechain --target ethers  --outDir ../demo/admin/typechain "./build/contracts/*json"
./node_modules/.bin/typechain --target ethers  --outDir ../demo/exchanger/typechain "./build/contracts/*json"
