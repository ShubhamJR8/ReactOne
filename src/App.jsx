// import { useState } from "react";
// import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hello World</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
