import React from "react";
import { Input, Menu } from 'semantic-ui-react'
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import Home from "./components/Home";
import Power from "./components/Power";
import Thoughts from "./components/Thoughts";
import Blog1 from "./components/blogs/Blog1";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/power" element={<Power />} />
        <Route exact path="/Thoughts" element={ <Thoughts></Thoughts>} />
        <Route exact path="/thoughts/blogs/Blog1" element={ <Blog1></Blog1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;