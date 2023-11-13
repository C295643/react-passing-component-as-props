import { ReactElement, ReactNode, cloneElement, useState } from "react";
import { SvgIconTypeMap } from "@mui/material";

type IconProps = {
  fontSize?: SvgIconTypeMap["props"]["fontSize"];
  color?: SvgIconTypeMap["props"]["color"];
  isHovered: boolean;
};

type ButtonProps = {
  iconList: ReactElement<IconProps>[];
  children: ReactNode;
};

export const ButtonWithIconElementList = ({
  iconList,
  children,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const clonedIconList = iconList.map((icon) =>
    cloneElement(icon, {
      fontSize: icon.props.fontSize || "small",
      isHovered: isHovered,
    })
  );

  return (
    <button
      className="button"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {clonedIconList.map((clonedIcon, index) => (
        <span key={index} className="button-icon">
          {clonedIcon}
        </span>
      ))}
      <span>{children}</span>
    </button>
  );
};
