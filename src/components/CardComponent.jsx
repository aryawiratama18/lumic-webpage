import PropTypes from 'prop-types';

const CardComponent = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 max-w-xs my-5 md:mx-5 md:my-0">
      <div className="relative h-40 overflow-hidden rounded-lg">
        <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-center text-primary-dark">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CardComponent;
