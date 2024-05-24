import ButtonComponent from "../components/ButtonComponent";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold mb-2 md:mt-20 max-w-screen-md text-center">
          Modernize retail labeling with our ESL revolution
        </h1>
        <h3 className="text-sm md:text-lg font-light max-w-screen-md text-center">
          Enjoy real-time price updates, dynamic pricing strategies, improved
          efficiency, and enhanced customer experience.
        </h3>
        <div className="flex mt-4 py-4 w-full px-4 md:px-0 md:w-auto">
          <ButtonComponent href="#contact" className="bg-gradient-to-r from-purple-400 to-purple-600">
            Free Trial
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
