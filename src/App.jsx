import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import UseCase from "./pages/UseCasePage";
import AboutUs from "./pages/AboutUsPage";

import { Routes, Route, NavLink } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import ButtonComponent from "./components/ButtonComponent";

import { navItems } from "./constants";
import { useState, useEffect } from "react";
import { ArrowUp} from "lucide-react";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowBackToTop(scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      <header className="sticky top-0 z-30 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <NavbarComponent toggleNavbar={toggleNavbar} mobileDrawerOpen={mobileDrawerOpen}/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/use-case" element={<UseCase />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <FooterComponent/>


      {showBackToTop && (
        <button
          className="fixed bottom-8 right-8 bg-primary text-white p-2 rounded-full shadow-md"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Overlay */}
      {mobileDrawerOpen && (
        <div
          className="fixed top-0 left-0 w-3/4 h-full bg-black bg-opacity-50 z-20"
          onClick={toggleNavbar}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white z-50 transform transition-transform duration-300 ${
          mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <NavLink
                  to={item.href}
                  className={`
                    ${
                      location.pathname === item.href
                        ? "text-primary border-b-2 border-primary"
                        : "text-primary-dark"
                    }
                    ml-1 pb-1 font-bold
                  `}
                  onClick={toggleNavbar}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6">
            <ButtonComponent
              href="#contact"
              className="bg-gradient-to-r from-primary-light to-primary-dark text-white"
              onClick={toggleNavbar}
            >
              Contact Us
            </ButtonComponent>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
