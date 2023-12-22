import { createElement, forwardRef } from "react";
import { IconNode, IconProps } from "./types";

const defaultAttrbutes = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
};

const createIcon = (componentName: string, iconNode: IconNode) => {
  const Component = forwardRef<SVGAElement, IconProps>(({ size = 24, ...rest }, ref) =>
    createElement(
      "svg",
      { ...defaultAttrbutes, ref, width: size, height: size, ...rest },
      ...iconNode.map(([element, attrs]) => createElement(element, { ...attrs }))
    )
  );
  Component.displayName = componentName;
  return Component;
};

export default createIcon;
