import CardComponent from "../components/CardComponent";
import ButtonComponent from "../components/ButtonComponent";
import { caseStudy } from "../constants";

const ShowcaseSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-md bg-gradient-to-r from-primary-light to-primary-dark p-5" data-aos="flip-up" data-aos-duration="1500">
        <div className="text-2xl md:text-3xl font-semibold mb-5 max-w-screen-md text-center text-white">
          ESL Usage in Grocery Market
        </div>
        <div className="w-full max-w-screen-md">
          <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/lXBT7eVbBrk?si=BxTwS-_eN-BSYYI3"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-auto md:flex-row justify-center items-center md:items-stretch mt-6 space-y-4 md:space-y-0 md:space-x-4" data-aos="fade-up" data-aos-duration="1500">
        {caseStudy.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
      <div className="flex mt-4 py-4 w-full px-4 md:px-0 md:w-auto justify-center" data-aos="fade-up" data-aos-duration="1700">
        <ButtonComponent 
        href="/use-case"
        className="bg-gradient-to-r from-primary-light to-primary-dark text-white"
        >Show More Case</ButtonComponent>
      </div>
    </div>
  );
};

export default ShowcaseSection;
