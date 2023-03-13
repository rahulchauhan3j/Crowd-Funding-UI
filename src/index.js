import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider
    activeChain={{
      // === Required information for connecting to the network === \\
      chainId: 31337, // Chain ID of the network
      // Array of RPC URLs to use
      rpc: ["http://127.0.0.1:8545/"],

      // === Information for adding the network to your wallet (how it will appear for first time users) === \\
      // Information about the chains native currency (i.e. the currency that is used to pay for gas)
      nativeCurrency: {
        decimals: 18,
        name: "Ether",
        symbol: "ETH",
      },
      shortName: "localhost", // Display value shown in the wallet UI
      slug: "localhost", // Display value shown in the wallet UI
      testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
      chain: "localhost", // Name of the network
      name: "LocalHost Testnet", // Name of the network
    }}
  >
    <App />
  </ThirdwebProvider>
);
