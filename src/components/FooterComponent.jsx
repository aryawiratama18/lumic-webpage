import { useCasesLink } from "../constants";
import { HashLink } from 'react-router-hash-link';
import { Mail, PhoneCall, MapPinned } from "lucide-react";
import lumicLogo from "../assets/lumic-logo-footer.png";

const FooterComponent = () => {
  return (
    <div>
      <hr className="border-t-2 border-purple-500 my-4" />

      <footer className="mt-10 mx-4 md:mx-40 my-4 p-4">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between">
          {/* Company Information */}
          <div className="w-full md:w-1/3 md:p-5">
            <div className="flex justify-left items-top">
              <img
                src={lumicLogo}
                alt="Lumic Footer Logo"
                className="h-14 lg:h-35"
              />
              <div className="flex flex-col ml-10">
                <h2 className="text-xl font-semibold text-primary-dark">
                  LUMIC
                </h2>
                <h2 className="text-xl font-semibold text-primary-dark">
                  ESL Solutions
                </h2>
              </div>
            </div>
            <p className="text-sm mt-4">
              Upgrade your store with our Electronic Shelf Labels for real-time
              pricing updates and increased efficiency.
            </p>
          </div>

          {/* Use Cases */}
          <div className="w-full md:w-1/3 md:p-5">
            <h2 className="font-semibold text-sm mb-2 text-primary-dark">
              Use Cases
            </h2>
            <ul>
              {useCasesLink.map((item, index) => (
                <li className="text-sm md:text-normal mb-1" key={index}>
                  <HashLink smooth to={item.href}>{item.text}</HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 md:p-5">
            <h2 className="font-semibold text-sm mb-2 text-primary-dark">
              Getting in Touch
            </h2>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Mail color="#EABF4B" className="mr-2" />
                <span className="text-sm md:text-normal">support@lumic.id</span>
              </div>
              <div className="flex items-center">
                <PhoneCall color="#EABF4B" className="mr-2" />
                <span className="text-sm md:text-normal">
                  +62 812-3580-6168
                </span>
              </div>
              <div className="flex items-center">
                <MapPinned color="#EABF4B" className="mr-2" />
                <span className="text-sm md:text-normal">
                  Graha Raya, Tangerang Selatan
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className="text-center mt-4 mb-2">
        <div className="text-sm mb-2">
          &copy; Copyright 2024 by <b className="text-primary-dark">Lumic</b>,
          All rights reserved
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
