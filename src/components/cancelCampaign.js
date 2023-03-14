import { Web3Button } from "@thirdweb-dev/react";
import config from "../configFile.json";
import { ethers } from "ethers";
function CancelCampaign(props) {
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
            await contract.contractWrapper.writeContract.cancelProjectProposal(
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
          props.handleCampaignMessage("Campaign Cancelled");
        } else {
          props.handleCampaignMessage(
            "Campaign Could Not Be Cancelled due to an error"
          );
        }
      }}
    >
      Cancel Campaign
    </Web3Button>
  );
}

export default CancelCampaign;
