import { Web3Button } from "@thirdweb-dev/react";
import config from "../configFile.json";
import { ethers } from "ethers";
function ViewProposal(props) {
  return (
    <Web3Button
      className="buttonCSS"
      contractAddress={config.contractAddress}
      contractAbi={config.abi}
      action={async (contract) => {
        props.resetCampaignData();
        props.handleCampaignMessage("");
        let call;
        try {
          call =
            await contract.contractWrapper.readContract.viewProjectProposal(
              props.campaignId
            );
        } catch (error) {
          console.log(error);
          return false;
        }
        return call;
      }}
      onSuccess={(result) => {
        if (result != false) {
          props.handleCampaignMessage(`Campaign details are as below`);
          props.showCampaignData(result);
        } else {
          props.handleCampaignMessage(
            "Campaign data couldnot be fetched due to an error"
          );
        }
      }}
    >
      View
    </Web3Button>
  );
}

export default ViewProposal;
