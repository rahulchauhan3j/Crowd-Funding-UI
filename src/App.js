import "./App.css";

import Home from "./components/home";
import Header from "./components/header.js";
import ProjectOwnerFunction from "./components/projectOwnerFunction";
import MintTokenFunction from "./components/mintTokenFunction";
import SubmitProjectProposal from "./components/submitProjectProposal";
import ManageProposal from "./components/manageProposal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/ProjectOwnerFunction"
            element={<ProjectOwnerFunction />}
          />
        </Routes>
        <Routes>
          <Route path="/MintTokenFunction" element={<MintTokenFunction />} />
        </Routes>
        <Routes>
          <Route
            path="/SubmitProjectProposal"
            element={<SubmitProjectProposal />}
          />
        </Routes>
        <Routes>
          <Route path="/ManageProposal" element={<ManageProposal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
