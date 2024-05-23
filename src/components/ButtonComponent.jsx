import PropTypes from 'prop-types';

const ButtonComponent = ({ href = null, onClick= null, children, className = '', type = 'button' }) => {
  const commonClasses = `py-2 px-3 w-full md:w-auto text-center font-semibold rounded-md text-white ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={commonClasses}
        style={{ cursor: 'pointer' }} 
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
      style={{ cursor: 'pointer' }} 
    >
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default ButtonComponent;
