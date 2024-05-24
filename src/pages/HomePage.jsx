import CustomersSection from "../section/CustomersSection";
import HeroSection from "../section/HeroSection";
import IntroSection from "../section/IntroSection";
import ShowcaseSection from "../section/ShowcaseSection";
import SubmissionSection from "../section/SubmissionSection";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 md:pt-5 px-6">
      <HeroSection />
      <IntroSection />
      <br />
      <ShowcaseSection />
      <hr className="border-t-2 border-primary my-4" />
      <CustomersSection />
      <hr className="border-t-2 border-primary my-4" />
      <br />
      <div id="contact">
        <SubmissionSection />
      </div>
    </div>
  );
};

export default HomePage;
