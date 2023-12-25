import { createElement, forwardRef, type ComponentProps, type ReactSVG } from "react";

export interface IconProps extends ComponentProps<"svg"> {
  size?: number;
}

type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][];

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
};

const createIcon = (componentName: string, iconNode: IconNode) => {
  const Component = forwardRef<SVGAElement, IconProps>(({ size = 24, ...rest }, ref) =>
    createElement(
      "svg",
      { ...defaultAttributes, ref, width: size, height: size, ...rest },
      ...iconNode.map(([element, attrs]) => createElement(element, { ...attrs }))
    )
  );
  Component.displayName = componentName;
  return Component;
};

export default createIcon;
