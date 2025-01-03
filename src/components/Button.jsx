
// eslint-disable-next-line react/prop-types
const Button = ({ children, color  }) => {
    return (
      <button
        type="button"
        className={`flex gap-1 px-3 py-2 ${color} hover:opacity-80 transition-opacity items-center justify-center rounded-lg text-white`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;