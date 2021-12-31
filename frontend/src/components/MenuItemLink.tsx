import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface IMenuItemLinkProps {
  to: string;
  text: string;
  className?: string;
  textSizeClass?: string;
  fontWeightClass?: string;
}

export default ({
  to,
  text,
  className,
  textSizeClass,
  fontWeightClass = "font-medium",
}: IMenuItemLinkProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = pathname.includes(to);

  return (
    <div
      className={`${textSizeClass ? textSizeClass : "text-2xl"} ${
        isActive ? "font-bold" : fontWeightClass
      } ${className ? className : ""} cursor-pointer`}
      onClick={() => navigate(to)}
    >
      {text}
    </div>
  );
};
