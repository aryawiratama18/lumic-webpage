import ESLFunctionSection from "../section/ESLFunctionSection";
import ProductGalleriesSection from "../section/ProductGalleriesSection";
import SubmissionSection from "../section/SubmissionSection";

const ProductsPage = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 md:pt-5 px-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-primary-dark my-10 animate__animated animate__fadeInDown">
        Explore More About Our Products
      </h1>
      <ESLFunctionSection />
      <hr className="border-t-2 border-primary my-4" />
      <ProductGalleriesSection />
      <br />
      <div id="contact">
        <SubmissionSection />
      </div>
    </div>
  );
};

export default ProductsPage;
