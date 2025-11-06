// Auto-generated comment for collaboration - 2025-11-08 16:39:17
// Auto-generated comment for collaboration - 2025-11-08 16:39:16
// Collaboration commit 35 by Valentine59 - 2025-11-08 16:38:23
// Collaboration commit 6 by Bradley747 - 2025-11-08 16:16:08
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const deployedFHECounter = await deploy("FHECounter", {
    from: deployer,
    log: true,
  });

  console.log(`FHECounter contract: `, deployedFHECounter.address);
};
export default func;
func.id = "deploy_fheCounter"; // id required to prevent reexecution
func.tags = ["FHECounter"];
