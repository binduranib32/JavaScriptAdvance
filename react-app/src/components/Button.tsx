import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "success";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
