import React from "react";
import Bio from "./Profile/Bio";
import FullName from "./Profile/FullName";
import HandleName from "./Profile/HandleName";

import Profession from "./Profile/Profession";

function App() {
  const name = "Safa";
  const lastName = "Tormane";
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "violet" }}>Welcome To My Profile</h1>
        <FullName name={name} lastName={lastName} />
        <Bio />
        <Profession />
      </header>
    </div>
  );
}
export default App;
