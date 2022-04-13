import "./style.scss";
import React, { useEffect, useState } from "react";
import Stories from "./pages/Stories";
import axios from "axios";
function App() {
  return (
    <div className="App">
      <Stories />
    </div>
  );
}

export default App;
