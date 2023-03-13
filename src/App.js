import "./App.css";

import Header from "./components/header.js";
import ProjectOwnerFunction from "./components/projectOwnerFunction";
import MintTokenFunction from "./components/mintTokenFunction";
import SubmitProjectProposal from "./components/submitProjectProposal";
import ManageProposal from "./components/manageProposal";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <ProjectOwnerFunction />
      <MintTokenFunction />
      <SubmitProjectProposal />
      <ManageProposal />
    </>
  );
}

export default App;
