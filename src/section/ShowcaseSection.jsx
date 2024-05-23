import groceryVideo from "../assets/zkong-esl-groceries.mp4";
import CardComponent from "../components/CardComponent";
import VideoComponent from "../components/VideoComponent";
import ButtonComponent from "../components/ButtonComponent";
import {caseStudy} from "../constants";

const ShowcaseSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-md bg-gradient-to-r from-purple-400 to-purple-600 p-5">
        <div className="text-2xl md:text-3xl font-semibold mb-5 max-w-screen-md text-center text-white">
          ESL Usage in Grocery Market
        </div>
        <VideoComponent
          src={groceryVideo}
          controls={true}
          autoplay={false}
          loop={false}
          muted={false}
        />
      </div>
      <div className="flex flex-col w-full md:w-auto md:flex-row justify-center items-center md:items-stretch mt-6 space-y-4 md:space-y-0 md:space-x-4">
        {caseStudy.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
      <div className="flex mt-4 py-4 w-full px-4 md:px-0 md:w-auto justify-center">
        <ButtonComponent href="/use-case">Show More Case</ButtonComponent>
      </div>
    </div>
  );
};

export default ShowcaseSection;
