import { Web3Button } from "@thirdweb-dev/react";
import config from "../configFile.json";
import { ethers } from "ethers";
function FundButton(props) {
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
            await contract.contractWrapper.writeContract.fundProjectProposal(
              props.campaignId,
              props.fundingAmount
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
          props.handleCampaignMessage("Campaign Successfully Funded!!");
        } else {
          props.handleCampaignMessage(
            "Campaign Could Not Be Funded due to an error"
          );
        }
      }}
    >
      Fund
    </Web3Button>
  );
}

export default FundButton;
