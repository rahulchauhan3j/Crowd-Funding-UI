import { Web3Button } from "@thirdweb-dev/react";
import config from "../configFile.json";
import { ethers } from "ethers";
function SubmitProjectProposalButton(props) {
  return (
    <Web3Button
      className="buttonCSS"
      contractAddress={config.contractAddress}
      contractAbi={config.abi}
      action={async (contract) => {
        try {
          if (props.endTime <= props.startTime) {
            props.handleProjectMessage(
              "Error - End Time must be greater than Start Time"
            );
            return "error thrown";
          }
          const proposal =
            await contract.contractWrapper.writeContract.submitProjectProposal(
              props.projectName,
              props.fundingGoal,
              props.startTime,
              props.endTime
            );
          const proposalTx = await proposal.wait();

          return proposalTx.events[0].args[0];
        } catch (error) {
          console.log(error);
          return false;
        }
      }}
      onSuccess={(result) => {
        if ((result = "error thrown")) {
          return;
        }
        if (result == false) {
          props.handleProjectMessage(
            "Campaign Could Not be Submitted due to an error"
          );
        } else {
          props.handleProjectMessage(`Campaign submitted. Id is ${result}`);
        }
      }}
    >
      Submit Proposal
    </Web3Button>
  );
}

export default SubmitProjectProposalButton;
