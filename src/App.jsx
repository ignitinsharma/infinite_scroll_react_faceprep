import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./Pages/Navbar";
import React from "react";

function App() {
  return (
    <React.Fragment className="App">
      <Navbar />
      <AllRoutes />
    </React.Fragment>
  );
}

export default App;
