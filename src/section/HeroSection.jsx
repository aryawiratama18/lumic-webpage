import ButtonComponent from "../components/ButtonComponent";
import introVideo from "../assets/zkong-esl-video.mp4";
import VideoComponent from "../components/VideoComponent";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold mb-2 md:mt-20 max-w-screen-md text-center animate__animated animate__fadeInTopLeft animate__delay-1s">
          Modernize retail labeling with our ESL revolution
        </h1>
        <h3 className="text-sm md:text-lg font-light max-w-screen-md text-center animate__animated animate__fadeInTopLeft animate__delay-2s">
          Enjoy real-time price updates, dynamic pricing strategies, improved
          efficiency, and enhanced customer experience.
        </h3>
        <div className="flex mt-4 py-4 w-full px-4 md:px-0 md:w-auto animate__animated animate__zoomIn animate__delay-2s">
          <ButtonComponent href="#contact" className="bg-gradient-to-r from-primary-light to-primary-dark">
            Free Trial
          </ButtonComponent>
        </div>
        <div className="m-4 py-6 flex justify-center items-center animate__animated animate__fadeInBottomRight animate__delay-1s">
        <VideoComponent src={introVideo} />
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
