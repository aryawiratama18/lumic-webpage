import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems, useCasesLink } from "../constants";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import { Menu, X, Mail, PhoneCall, MapPinned, ArrowUp } from "lucide-react";

const RootLayout = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowBackToTop(scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <nav>
          <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
              <NavLink to="/">
                <div className="flex items-center flex-shrink-0">
                  <img className="h-10 w-10 mr-2.5" src={logo} alt="logo" />
                  <span className="text-xl tracking-tight">Lumic</span>
                </div>
              </NavLink>
              <ul className="hidden lg:flex ml-14 space-x-12">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.href}
                      className={`
                    ${
                      location.pathname === item.href
                        ? "text-amber-600 border-b-2 border-amber-600"
                        : ""
                    }
                    ml-1 pb-1 font-bold
                  `}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="hidden lg:flex justify-center space-x-12 items-center">
                <ButtonComponent
                  href="#contact"
                  className="bg-gradient-to-r from-purple-400 to-purple-600"
                >
                  Contact Us
                </ButtonComponent>
              </div>
              <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar}>
                  {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="transition-opacity duration-500 ease-in-out">
        <Outlet />
      </main>

      <hr className="border-t-2 border-purple-500 my-4" />

      <footer className="mt-20 mx-4 md:mx-40 my-4 p-4">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between">
          {/* Company Information */}
          <div className="w-full md:w-1/3 md:p-5">
            <div className="text-xl font-semibold">LUMIC - ESL Solutions</div>
            <p className="text-sm">
              Upgrade your store with our Electronic Shelf Labels for real-time
              pricing updates and increased efficiency.
            </p>
          </div>

          {/* Use Cases */}
          <div className="w-full md:w-1/3 md:p-5">
            <h2 className="font-semibold text-sm mb-2">Use Cases</h2>
            <ul>
              {useCasesLink.map((item, index) => (
                <li className="text-sm md:text-normal" key={index}>
                  <NavLink to={item.href}>{item.text}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 md:p-5">
            <h2 className="font-semibold text-sm mb-2">Getting in Touch</h2>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Mail color="#D29A01" className="mr-2" />
                <span className="text-sm md:text-normal">support@lumic.id</span>
              </div>
              <div className="flex items-center">
                <PhoneCall color="#D29A01" className="mr-2" />
                <span className="text-sm md:text-normal">+62 812-3580-6168</span>
              </div>
              <div className="flex items-center">
                <MapPinned color="#D29A01" className="mr-2" />
                <span className="text-sm md:text-normal">Graha Raya, Tangerang Selatan</span>
              </div>
            </div>
          </div>
        </div>

        
      </footer>
      {/* Copyright */}
      <div className="text-center mt-4 mb-2">
          <div className="text-sm mb-2">
            Copyright &copy; 2024. All rights reserved
          </div>
          <div className="text-sm">Lumic - ESL Solutions</div>
        </div>

      {showBackToTop && (
        <button
          className="fixed bottom-8 right-8 bg-purple-500 text-white p-2 rounded-full shadow-md"
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
                        ? "text-amber-600 border-b-2 border-amber-600"
                        : ""
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
              className="bg-gradient-to-r from-purple-400 to-purple-600"
              onClick={toggleNavbar}
            >
              Contact Us
            </ButtonComponent>
          </div>
        </div>
      </div>
      {/* End of Mobile Drawer */}
    </div>
  );
};

export default RootLayout;
