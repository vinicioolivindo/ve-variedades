
// eslint-disable-next-line react/prop-types
const Button = ({ children, color, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`flex gap-1 px-3 py-2 ${color} hover:opacity-80 transition-opacity items-center justify-center rounded-lg cursor-pointer text-white`}
    >
      {children}
    </a>
  );
};

export default Button;
