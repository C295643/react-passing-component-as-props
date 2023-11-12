import { ReactElement, ReactNode, cloneElement, useState } from "react";
import { SvgIconTypeMap } from "@mui/material";

type IconProps = {
  fontSize?: SvgIconTypeMap["props"]["fontSize"];
  color?: SvgIconTypeMap["props"]["color"];
  isHovered: boolean;
};

type ButtonProps = {
  icon: ReactElement<IconProps>;
  children: ReactNode;
};

export const ButtonWithIconElement = ({ icon, children }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const clonedIcon = cloneElement(icon, {
    fontSize: icon.props.fontSize || "small",
    isHovered: isHovered,
  });

  return (
    <button
      className="button"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <span className="button-icon">{clonedIcon}</span>
      <span>{children}</span>
    </button>
  );
};
