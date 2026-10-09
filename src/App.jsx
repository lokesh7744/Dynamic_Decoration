import { useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import NavbarHome from "./components/NavbarHome";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

// Reset scroll position when the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-[#111111]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarHome />
                <Hero />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
              </>
            }
          />

          <Route
            path="/sectors"
            element={
              <>
                <Navbar />
                <Sectors />
              </>
            }
          />

          <Route
            path="/projects"
            element={
              <>
                <Navbar />
                <Projects />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

