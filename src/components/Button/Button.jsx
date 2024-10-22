import "./Button.css";

const Button = ({ text, bgColor, color, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
