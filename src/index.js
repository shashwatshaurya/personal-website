import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./pages/ErrorPage";
import Loading from "./components/Loading/Loading";
import MobilePhoneCheck from "./components/MobilePhoneCheck";

const RootLayout = lazy(() => import("./pages/RootLayout"));
const Blog = lazy(() => import("./pages/Blog"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Connect = lazy(() => import("./pages/Connect"));
const Resume = lazy(() => import("./pages/Resume"));
const NoMatch = lazy(() => import("./pages/NoMatch"));

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1310);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <MobilePhoneCheck />
  ) : (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="blog" element={<Blog />} />
              <Route path="connect" element={<Connect />} />
              <Route path="resume" element={<Resume />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
