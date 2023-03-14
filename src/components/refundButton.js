import { Web3Button } from "@thirdweb-dev/react";
import config from "../configFile.json";
import { ethers } from "ethers";
function RefundButton(props) {
  return (
    <Web3Button
      className="buttonCSS"
      contractAddress={config.contractAddress}
      contractAbi={config.abi}
      action={async (contract) => {
        props.resetCampaignData();
        props.handleCampaignMessage("");
        let add;
        try {
          const call =
            await contract.contractWrapper.writeContract.withdrawFunds(
              props.campaignId
            );
          add = await call.wait();
        } catch (error) {
          console.log(error);
          return false;
        }
        return true;
      }}
      onSuccess={async (result) => {
        if (result == true) {
          props.handleCampaignMessage("Amount Successfully ReFunded!!");
        } else {
          props.handleCampaignMessage(
            "Amount Could Not Be Refunded due to an error"
          );
        }
      }}
    >
      Refund
    </Web3Button>
  );
}

export default RefundButton;
