import eslPic from "../assets/hero-esl.jpg";
import { eslFunctions } from "../constants";

const ESLFunctionSection = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-2 font-medium text-lg md:text-2xl text-primary-dark animate__animated animate__fadeInDown animate__delay-1s text-left">
        Electronic Shelf Label Function
      </h1>
      <p className="text-sm md:text-xl mb-3 font-light animate__animated animate__fadeInDown animate__delay-1s  md:text-left">
        Introducing our cutting-edge Electronic Shelf Label (ESL) system – the
        ultimate solution for modern retail management. Designed to
        revolutionize how you manage and display product information, our ESL
        offers seamless store management integration, effortless updates, and
        real-time stock and alert monitoring. Enhance your operational
        efficiency, ensure accuracy, and provide a superior shopping experience
        with our state-of-the-art ESL system. Embrace the future of retail
        today.
      </p>
      <div className="flex flex-col items-center animate__animated animate__fadeInDown animate__delay-2s">
        <div className="shadow-md mb-5 w-full md:w-2/3">
          <img src={eslPic} alt="ESL Picture" className="rounded-md w-full" />
        </div>
        <div className="flex flex-col md:flex-row" data-aos="flip-up" data-aos-duration="1500">
          {eslFunctions.map((item, index) => (
            <div className="p-4 flex-1" key={index}>
              <h3 className="text-lg font-semibold mb-2 text-primary-dark  md:text-left">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600  md:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ESLFunctionSection;
