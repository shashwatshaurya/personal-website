import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from '../pages/Root';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Connect from '../pages/Connect';
import NoMatch from '../pages/NoMatch';
import './style.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="connect" element={<Connect />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);