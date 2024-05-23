import PropTypes from 'prop-types';

const TextAreaComponent = ({ id, label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-normal md:text-sm mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        rows="4"
        required={required}
      ></textarea>
    </div>
  );
};

TextAreaComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

export default TextAreaComponent;
