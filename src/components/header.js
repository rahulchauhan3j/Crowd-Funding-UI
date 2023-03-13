import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="headerCSS">
      <h1>Web3 Crowdfunding</h1>
      <Link to="/">Home</Link>
      <Link to="/ProjectOwnerFunction">Add Project Owner</Link>
      <Link to="/MintTokenFunction">Mint ERC20</Link>
      <Link to="/SubmitProjectProposal">Submit Campaign</Link>
      <Link to="/ManageProposal">View Campaign</Link>
      <ConnectWallet className="walletButtonCss" />
    </header>
  );
}

export default Header;
