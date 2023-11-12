import { ComponentType, ReactNode, useState } from "react";
import { SvgIconTypeMap } from "@mui/material";

type IconProps = {
  fontSize?: SvgIconTypeMap["props"]["fontSize"];
  color?: SvgIconTypeMap["props"]["color"];
  isHovered: boolean;
};

type ButtonProps = {
  children: ReactNode;
  Icon: ComponentType<IconProps>;
};

export const ButtonWithIconComponent = ({ children, Icon }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className="button"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <span className="button-icon">
        <Icon fontSize="small" isHovered={isHovered} />
      </span>
      <span>{children}</span>
    </button>
  );
};
