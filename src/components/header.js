import { ConnectWallet } from "@thirdweb-dev/react";

function Header() {
  return (
    <header className="headerCSS">
      <h1>Web3 Crowdfunding</h1>
      <ConnectWallet className="walletButtonCss" />
    </header>
  );
}

export default Header;
