import PropTypes from "prop-types";

const UseCaseComponent = ({ id = '', image = null, title = '', description = '', reverse = false }) => {
  return (
    <div
      id={id}
      className={`use-case-component flex flex-col md:flex-row items-top my-6 ${
        reverse ? "md:flex-row-reverse" : ""
      } relative pt-20 -mt-20`}
    >
      <div className="image-container mb-4 w-full md:w-1/2 flex justify-center md:justify-start" data-aos="fade-up"
        data-aos-duration="1500">
        <img src={image} alt={title} className="object-cover" />
      </div>
      <div className="content-container w-full md:w-1/2 md:pl-8" data-aos="fade-up"
        data-aos-duration="1800">
        <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
        <p className="text-sm md:text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

UseCaseComponent.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default UseCaseComponent;
