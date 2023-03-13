import { useState } from "react";
import MintERC20 from "./mintERC20";
import CheckBalance from "./checkBalance";
function MintTokenFunction() {
  const [outputERC20, setOutputERC20] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState(0);

  function showOutputERC20(message) {
    setOutputERC20(message);
  }

  function updateUserAddress(event) {
    setUserAddress(event.target.value);
  }

  function updateTokenAmount(event) {
    setTokenAmount(event.target.value);
  }

  return (
    <fieldset>
      <legend>ERC20 Token Management</legend>
      <div className="projectOwnerCSS">
        <div className="inputDivCSS">
          <label htmlFor="addressUser" className="inputLabelCSS">
            Address
          </label>
          <input
            type="text"
            id="addressUser"
            className="inputCSS"
            onChange={updateUserAddress}
          ></input>
          <label htmlFor="erc20Tokens" className="inputLabelCSS">
            Tokens To Be Minted
          </label>
          <input
            type="number"
            id="erc20Tokens"
            className="inputCSS"
            onChange={updateTokenAmount}
          ></input>
          <span>{outputERC20}</span>
        </div>
        <div className="projectOwnerButtonsAlignCss">
          <CheckBalance
            userAddress={userAddress}
            handleERC20Message={(message) => {
              showOutputERC20(message);
            }}
          />
          <MintERC20
            userAddress={userAddress}
            amount={tokenAmount}
            handleERC20Message={(message) => {
              showOutputERC20(message);
            }}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default MintTokenFunction;
