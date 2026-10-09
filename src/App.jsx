import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHome from "./components/NavbarHome";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#111111]">
        <Routes>
          
          {/* 1. HOME PAGE ROUTE */}
          {/* path="/" ka matlab hai main link (localhost:5173/) */}
          <Route 
            path="/" 
            element={
              <>
                <NavbarHome />
                <Hero />
              </>
            } 
          />

          {/* 2. SERVICES PAGE ROUTE */}
          {/* path="/services" ka matlab hai (localhost:5173/services) */}
          <Route 
            path="/services" 
            element={
              <>
                <Navbar />
                <Services />
              </>
            } 
          />

          {/* 3. SECTORS PAGE ROUTE */}
          {/* path="/sectors" ka matlab hai (localhost:5173/sectors) */}
          <Route 
            path="/sectors" 
            element={
              <>
                <Navbar />
                <Sectors />
              </>
            } 
          />
          
          {/* 4. PROJECTS PAGE ROUTE */}
          <Route 
            path="/projects" 
            element={
              <>
                <Navbar />
                <Projects />
              </>
            } 
          />
          
          {/* 5. ABOUT PAGE ROUTE */}
          <Route 
            path="/about" 
            element={
              <>
                <Navbar />
                <About />
              </>
            } 
          />

          {/* 6. CONTACT PAGE ROUTE */}
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