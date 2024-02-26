import { createElement, forwardRef, type ComponentProps, type ReactSVG } from "react";

export interface IconProps extends ComponentProps<"svg"> {
  size?: number;
}

export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][];

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
};

function isSafeSize(value: IconProps["width"]) {
  return value !== null && value !== undefined;
}

const createIcon = (componentName: string, iconNode: IconNode) => {
  const Component = forwardRef<SVGAElement, IconProps>(
    ({ size = 24, width, height, ...rest }, ref) =>
      createElement(
        "svg",
        {
          ...defaultAttributes,
          ref,
          width: isSafeSize(width) ? width : size,
          height: isSafeSize(height) ? height : size,
          ...rest
        },
        ...iconNode.map(([element, attrs]) => createElement(element, { ...attrs }))
      )
  );
  Component.displayName = componentName;
  return Component;
};

export default createIcon;
