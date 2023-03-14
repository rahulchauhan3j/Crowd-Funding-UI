import { useState } from "react";
import ViewProposal from "./viewProposalButton";
import FundButton from "./fundButton";
import config from "../configFile.json";
import RefundButton from "./refundButton";
import TransferFundsToProjectOwnerButton from "./transferFundsToProjectOwnerButton";
import CancelCampaign from "./cancelCampaign";

function ManageProposal() {
  const [outputCampaignMessage, setOutputCampaignMessage] = useState("");
  const [campaignId, setCampaignId] = useState(0);
  const [fundingAmount, setFundingAmount] = useState(0);

  const [projectOwnerAddressView, setProjectOwnerAddressView] = useState("");
  const [projectNameView, setProjectNameView] = useState("");
  const [fundingGoalView, setFundingGoalView] = useState("");
  const [fundsRecievedView, setFundsRecievedView] = useState("");
  const [startTimeView, setStartTimeView] = useState("");
  const [endTimeView, setEndTimeView] = useState("");
  const [campaignStatusView, setCampaignStatusView] = useState("");

  function updateCampaignId(event) {
    setCampaignId(event.target.value);
  }

  function updateFundingAmount(event) {
    setFundingAmount(event.target.value);
  }

  function updateOutputCampaignMessage(message) {
    setOutputCampaignMessage(message);
  }

  function updateProjectOwnerAddressView(message) {
    setProjectOwnerAddressView(message);
  }

  function updateProjectNameView(message) {
    setProjectNameView(message);
  }

  function updateFundingGoalView(message) {
    setFundingGoalView(message);
  }
  function updateFundsRecievedGoalView(message) {
    setFundsRecievedView(message);
  }

  function updateStartTimeView(message) {
    if (message == 0) {
      setStartTimeView(0);
      return;
    }
    const startTime = new Date(message.toNumber());
    setStartTimeView(startTime);
  }

  function updateEndTimeView(message) {
    if (message == 0) {
      setEndTimeView(0);
      return;
    }
    const endTime = new Date(message.toNumber());
    setEndTimeView(endTime);
  }

  function updateCampaignStatusView(message) {
    setCampaignStatusView(config.campaignStatus[message]);
  }

  return (
    <fieldset>
      <legend>Manage Crowd Funding Campaign</legend>
      <div className="projectOwnerCSS">
        <div className="inputDivCSS">
          <label htmlFor="campaignId" className="inputLabelCSS">
            Crowd Funding Campaign Id
          </label>
          <input
            type="number"
            id="campaignId"
            className="inputCSS"
            onChange={updateCampaignId}
          ></input>
          <label htmlFor="amountToBeFunded" className="inputLabelCSS">
            Funding Amount (ERC 20 Tokens)
          </label>
          <input
            type="number"
            id="amountToBeFunded"
            className="inputCSS"
            onChange={updateFundingAmount}
          ></input>
          <span className="outputMessageCSS">{outputCampaignMessage}</span>
          {projectOwnerAddressView && (
            <div className="campaignDataCSS">
              <br></br>
              <br></br>
              <span>{`Campaign Owner Address : ${projectOwnerAddressView}`}</span>
              <br></br>
              <span>{`Campaign Name : ${projectNameView}`}</span>
              <br></br>
              <span>{`Funding Goal : ${fundingGoalView}`}</span>
              <br></br>
              <span>{`Funds Recieved : ${fundsRecievedView}`}</span>
              <br></br>
              <span>{`Campaign Start Time : ${startTimeView}`}</span>
              <br></br>
              <span>{`Campaign End Time : ${endTimeView}`}</span>
              <br></br>
              <span>{`Campaign Status : ${campaignStatusView}`}</span>
            </div>
          )}
        </div>
        <div className="projectOwnerButtonsAlignCss">
          <ViewProposal
            campaignId={campaignId}
            handleCampaignMessage={(message) => {
              updateOutputCampaignMessage(message);
            }}
            showCampaignData={(message) => {
              updateProjectOwnerAddressView(message[0]);
              updateProjectNameView(message[1]);
              updateFundingGoalView(message[2]);
              updateStartTimeView(message[3]);
              updateEndTimeView(message[4]);
              updateFundsRecievedGoalView(message[5]);
              updateCampaignStatusView(message[6]);
            }}
            resetCampaignData={(message) => {
              updateProjectOwnerAddressView("");
              updateProjectNameView("");
              updateFundingGoalView("");
              updateStartTimeView("");
              updateEndTimeView("");
              updateFundsRecievedGoalView("");
              updateCampaignStatusView("");
            }}
          />
          <FundButton
            campaignId={campaignId}
            fundingAmount={fundingAmount}
            handleCampaignMessage={(message) => {
              updateOutputCampaignMessage(message);
            }}
            resetCampaignData={(message) => {
              updateProjectOwnerAddressView("");
              updateProjectNameView("");
              updateFundingGoalView("");
              updateStartTimeView("");
              updateEndTimeView("");
              updateFundsRecievedGoalView("");
              updateCampaignStatusView("");
            }}
          />
          <RefundButton
            campaignId={campaignId}
            handleCampaignMessage={(message) => {
              updateOutputCampaignMessage(message);
            }}
            resetCampaignData={(message) => {
              updateProjectOwnerAddressView("");
              updateProjectNameView("");
              updateFundingGoalView("");
              updateStartTimeView("");
              updateEndTimeView("");
              updateFundsRecievedGoalView("");
              updateCampaignStatusView("");
            }}
          />
          <TransferFundsToProjectOwnerButton
            campaignId={campaignId}
            handleCampaignMessage={(message) => {
              updateOutputCampaignMessage(message);
            }}
            resetCampaignData={(message) => {
              updateProjectOwnerAddressView("");
              updateProjectNameView("");
              updateFundingGoalView("");
              updateStartTimeView("");
              updateEndTimeView("");
              updateFundsRecievedGoalView("");
              updateCampaignStatusView("");
            }}
          />
          <CancelCampaign
            campaignId={campaignId}
            handleCampaignMessage={(message) => {
              updateOutputCampaignMessage(message);
            }}
            resetCampaignData={() => {
              updateProjectOwnerAddressView("");
              updateProjectNameView("");
              updateFundingGoalView("");
              updateStartTimeView(0);
              updateEndTimeView(0);
              updateFundsRecievedGoalView("");
              updateCampaignStatusView("");
            }}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default ManageProposal;
