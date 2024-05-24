import eslImg from "../assets/ESL.png";
import cloudImg from "../assets/zkong-cloud.png";
import ButtonComponent from "../components/ButtonComponent";
import { NavLink } from "react-router-dom";

const IntroSection = () => {
  return (
    <div className="mt-6 mb-8">
      <div className="flex flex-col md:flex-row px-2 my-6">
        <div
          className="basis-1/3 flex justify-center md:justify-start"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img
            src={eslImg}
            alt="ESL Image 1"
            className="w-xs md:w-lg lg:w-3xl object-contain"
          />
        </div>
        <div
          className="basis-1/2 ml-0 md:ml-6 mt-4 md:mt-0"
          data-aos="fade-up"
          data-aos-duration="1700"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary-dark">
            Discover Electronic Shelf Labels (ESLs): Modernizing Price Tags
          </h2>
          <p className="text-sm md:text-sm lg:text-base mt-2">
            Say farewell to old paper price labels. ESLs are innovative
            electronic displays placed on shelves. They&#39;re linked wirelessly
            to the store&#39;s computer system, showing accurate prices in
            real-time. No more manual updates – just effortless, precise pricing
            management. In collaboration with ZKong, an experienced ESL
            manufacturer, we&#39;re introducing advanced Cloud ESL solutions to
            Indonesia.
          </p>
        </div>
      </div>
      <div
        className="flex mt-4 py-4 w-full px-4 md:px-0 md:w-auto justify-center"
        data-aos="fade-up"
        data-aos-duration="1900"
      >
        <NavLink to="/products">
          <ButtonComponent className="bg-gradient-to-r from-primary-light to-primary-dark text-white">
            Show More Products
          </ButtonComponent>
        </NavLink>
      </div>
      <div className="px-2 md:mt-20">
        <h2
          className="text-xl md:text-2xl font-semibold text-primary-dark text-center py-2"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          How it works ?
        </h2>
        <div
          className="flex justify-center bg-white rounded-md p-5"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <img
            src={cloudImg}
            alt="ESL Image 2"
            className="w-xs md:w-lg lg:w-3xl object-contain mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
