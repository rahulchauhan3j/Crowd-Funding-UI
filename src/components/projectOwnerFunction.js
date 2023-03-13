import { useState } from "react";
import AddOwner from "./addOwner";
import CheckOwner from "./checkOwner";

function ProjectOwnerFunction() {
  const [output, setOutput] = useState("");
  const [projectOwnerAddress, setProjectOwnerAddress] = useState("");

  function showOutput(message) {
    setOutput(message);
  }

  function updateAddress(event) {
    setProjectOwnerAddress(event.target.value);
  }

  return (
    <fieldset>
      <legend>Add Project Owner</legend>
      <div className="projectOwnerCSS">
        <div className="inputDivCSS">
          <label htmlFor="addressProjectOwner" className="inputLabelCSS">
            Project Owner Address
          </label>
          <input
            type="text"
            id="addressProjectOwner"
            className="inputCSS"
            onChange={updateAddress}
          ></input>
          <span>{output}</span>
        </div>
        <div className="projectOwnerButtonsAlignCss">
          <CheckOwner
            address={projectOwnerAddress}
            handleMessage={(message) => {
              showOutput(message);
            }}
          />
          <AddOwner
            address={projectOwnerAddress}
            handleMessage={(message) => {
              showOutput(message);
            }}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default ProjectOwnerFunction;
