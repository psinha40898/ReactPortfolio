import React from "react";
import { Input, Menu } from 'semantic-ui-react'
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import Home from "./components/Home";
import Power from "./components/Power";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/power" element={<Power />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;