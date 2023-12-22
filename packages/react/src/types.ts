import { ComponentProps, ForwardRefExoticComponent, ReactSVG } from "react";

export interface IconProps extends Omit<ComponentProps<"svg">, "children"> {
  size?: number;
}

export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][];
