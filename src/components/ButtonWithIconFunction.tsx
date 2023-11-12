import { SvgIconTypeMap } from "@mui/material";
import { ReactNode, ReactElement, useState } from "react";

type IconProps = {
  fontSize?: SvgIconTypeMap["props"]["fontSize"];
  color?: SvgIconTypeMap["props"]["color"];
  isHovered: boolean;
};

type ButtonProps = {
  children: ReactNode;
  iconFunction: (settings: {
    fontSize: IconProps["fontSize"];
    isHovered: boolean;
  }) => ReactElement<IconProps>;
};

export const ButtonWithIconFunction = ({
  children,
  iconFunction,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const icon = iconFunction({
    fontSize: "small",
    isHovered: isHovered,
  });
  return (
    <button
      className="button"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <span className="button-icon">{icon}</span>
      <span>{children}</span>
    </button>
  );
};
