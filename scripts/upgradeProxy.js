const { ethers, upgrades } = require('hardhat');

const proxyAddress = '0xbd3dDd99F495089E40fc1C2342F764A7bCfdF88e';

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + upgraded.owner());
  console.log('Proxy contract address: ' + proxyAddress);
  console.log('Implementation contract address: ' + implementationAddress);
}

main();