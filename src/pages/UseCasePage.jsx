import SubmissionSection from "../section/SubmissionSection";
import UseCasesSection from "../section/UseCasesSection";

const UseCasePage = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 md:pt-5 px-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-primary-dark my-10 animate__animated animate__fadeInDown">
        Success Cases
      </h1>
      <h3>Discover How Electronic Shelf Labels are Transforming Retail and Beyond: Real-World Examples of Increased Efficiency, Enhanced Customer Experience, and Streamlined Operations Across Various Industries</h3>
      <UseCasesSection/>
      <hr className="border-t-2 border-primary my-4" />
      <br />
      <div id="contact">
        <SubmissionSection />
      </div>
    </div>
  );
};

export default UseCasePage;
