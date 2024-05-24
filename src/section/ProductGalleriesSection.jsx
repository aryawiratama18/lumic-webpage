import { useState } from "react";
import { eslProducts } from "../constants/products";
import ButtonComponent from "../components/ButtonComponent";

const ProductGalleriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(eslProducts[0]);
  const [selectedItem, setSelectedItem] = useState(selectedCategory.types[0]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedItem(category.types[0]);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container mx-auto py-8">
      <h1
        className="mb-6 font-medium text-center text-2xl text-primary-dark"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Product Galleries
      </h1>
      <h2
        className="text-primary-dark font-semibold text-xl mb-4 text-left"
        data-aos="fade-up"
        data-aos-duration="1700"
      >
        Electronic Shelf Label
      </h2>
      <div
        className="flex flex-col md:flex-row"
        data-aos="fade-up"
        data-aos-duration="1900"
      >
        <div className="flex flex-col categories mb-6 md:mb-0 md:mr-36">
          {eslProducts.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer pb-2 mb-2 ${
                selectedCategory.id === category.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-primary-dark"
              }`}
            >
              {category.category}
            </div>
          ))}
        </div>
        <div className="flex flex-col esl-models w-full">
          <div className="flex flex-row mb-4 justify-start">
            {selectedCategory.types.map((item) => (
              <ButtonComponent
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`mr-2 border-2 ${
                  selectedItem.id === item.id
                    ? "border-primary text-primary"
                    : "border-gray-200 text-gray-500"
                }`}
              >
                {item.shortName}
              </ButtonComponent>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-64 h-64 mb-4 md:mb-0 md:mr-8 basis-1/3">
              <img
                src={selectedItem.image}
                alt={selectedItem.fullName}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center md:items-start md:ml-10 basis-1/2">
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                {selectedItem.fullName}
              </h3>
              <p className="mb-4 text-center md:text-left">
                {selectedItem.description}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start mb-4">
                {selectedItem.spec.featureIcon.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Feature ${index}`}
                    className="w-12 h-12 m-2"
                  />
                ))}
              </div>
              <div className="text-left">
                <p>
                  <strong>Size:</strong> {selectedItem.spec.size}
                </p>
                <p>
                  <strong>Screen:</strong> {selectedItem.spec.screen}
                </p>
                <p>
                  <strong>Temperature:</strong> {selectedItem.spec.temperature}
                </p>
                <p>
                  <strong>Battery:</strong> {selectedItem.spec.battery}
                </p>
                <div className="mt-4">
                  <ButtonComponent
                    href="#contact"
                    className="bg-primary text-white"
                  >
                    Order Now
                  </ButtonComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGalleriesSection;
