import PropTypes from 'prop-types';

const InputFieldComponent = ({ id, label, name, type = 'text', placeholder ='', value, onChange, required = false, showTooltip = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-normal md:text-sm mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        required={required}
      />
      {showTooltip && required && !value && (
        <div className="absolute top-full left-0 mt-1 text-red-500 text-sm">
          {label} is required
        </div>
      )}
    </div>
  );
};

InputFieldComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  showTooltip: PropTypes.bool
};

export default InputFieldComponent;
