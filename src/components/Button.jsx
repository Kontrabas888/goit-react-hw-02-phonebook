import PropTypes from 'prop-types';

export const Button = ({ children, type = 'button', ...props }) => {
  return (
    <button
      className="text-md w-full max-w-[260px] rounded-md bg-indigo-600 px-3 py-2.5 font-bold text-white shadow-md transition-colors hover:bg-indigo-400"
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
};
