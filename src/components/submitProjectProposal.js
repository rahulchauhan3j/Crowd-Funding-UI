import { useState } from "react";
import SubmitProjectProposalButton from "./submitProjectProposalButton";

function SubmitProjectProposal() {
  const [outputProjectMessage, setOutputProjectMessage] = useState("");
  const [projectName, setProjectName] = useState("");
  const [fundingGoal, setFundingGoal] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  function showOutputProjectMessage(message) {
    setOutputProjectMessage(message);
  }

  function updateProjectName(event) {
    setProjectName(event.target.value);
  }

  function updateFundingGoal(event) {
    setFundingGoal(event.target.value);
  }

  function updateStartTime(event) {
    const millisStartTime = new Date(event.target.value).getTime();
    setStartTime(millisStartTime);
  }

  function updateEndTime(event) {
    const millisEndTime = new Date(event.target.value).getTime();
    setEndTime(millisEndTime);
  }

  return (
    <fieldset>
      <legend>Submit Crowd Funding Campaign</legend>
      <div className="projectOwnerCSS">
        <div className="inputDivCSS">
          <label htmlFor="projectName" className="inputLabelCSS">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            className="inputCSS"
            onChange={updateProjectName}
          ></input>
          <label htmlFor="fundingGoal" className="inputLabelCSS">
            Funding Goal
          </label>
          <input
            type="number"
            id="fundingGoal"
            className="inputCSS"
            onChange={updateFundingGoal}
          ></input>
          <label htmlFor="startTime" className="inputLabelCSS">
            Start Time
          </label>
          <input
            type="datetime-local"
            id="startTime"
            className="inputCSS"
            onChange={updateStartTime}
          ></input>
          <label htmlFor="endTime" className="inputLabelCSS">
            End Time
          </label>
          <input
            type="datetime-local"
            id="endTime"
            className="inputCSS"
            onChange={updateEndTime}
          ></input>
          <span>{outputProjectMessage}</span>
        </div>
        <SubmitProjectProposalButton
          projectName={projectName}
          fundingGoal={fundingGoal}
          startTime={startTime}
          endTime={endTime}
          handleProjectMessage={(message) => {
            showOutputProjectMessage(message);
          }}
        />
      </div>
    </fieldset>
  );
}

export default SubmitProjectProposal;
