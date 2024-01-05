import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./pages/ErrorPage";
import Loading from './components/Loading/Loading';

const RootLayout = lazy(() => import('./pages/RootLayout'));
const Blog = lazy(() => import('./pages/Blog'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Connect = lazy(() => import('./pages/Connect'));
const NoMatch = lazy(() => import('./pages/NoMatch'));

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="blog" element={<Blog />} />
                <Route path="connect" element={<Connect />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);