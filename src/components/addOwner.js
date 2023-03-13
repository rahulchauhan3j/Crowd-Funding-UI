import { Web3Button } from "@thirdweb-dev/react";
import config from "../configFile.json";
import { ethers } from "ethers";
function AddOwner(props) {
  return (
    <Web3Button
      className="buttonCSS"
      contractAddress={config.contractAddress}
      contractAbi={config.abi}
      action={async (contract) => {
        if (ethers.utils.isAddress(props.address)) {
          let add;
          try {
            const call =
              await contract.contractWrapper.writeContract.addProjectOwner(
                props.address
              );
            add = await call.wait();
          } catch (error) {
            console.log(error);
            return false;
          }
          return true;
        } else {
          throw "Invalid Address";
        }
      }}
      onSuccess={(result) => {
        if (result == true) {
          props.handleMessage("Project Owner Added");
        } else {
          props.handleMessage("Project Owner NOT Added due to an Error");
        }
      }}
      onError={(error) => {
        props.handleMessage(error);
      }}
    >
      Add
    </Web3Button>
  );
}

export default AddOwner;
