import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Connect from '../pages/Connect';
import './style.css';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
        errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route
            path="/blog"
            element={<Blog />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/connect"
            element={<Connect />}
          />
        </Route>
      </Route>
    )
  );
  
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);