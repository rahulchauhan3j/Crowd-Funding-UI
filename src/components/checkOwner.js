import { Web3Button } from "@thirdweb-dev/react";
import config from "../configFile.json";
import { ethers } from "ethers";
function CheckOwner(props) {
  return (
    <Web3Button
      className="buttonCSS"
      contractAddress={config.contractAddress}
      contractAbi={config.abi}
      action={async (contract) => {
        props.handleMessage("");
        if (ethers.utils.isAddress(props.address)) {
          const exists =
            await contract.contractWrapper.readContract.isProjectOwner(
              props.address
            );
          return exists;
        } else {
          throw "Invalid Address";
        }
      }}
      onSuccess={(result) => {
        if (result == true) {
          props.handleMessage("Project Owner Exists");
        } else {
          props.handleMessage("Project Owner Doesnt Exists");
        }
      }}
      onError={(error) => {
        props.handleMessage(error);
      }}
    >
      Check
    </Web3Button>
  );
}

export default CheckOwner;
