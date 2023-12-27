import type { SVGAttributes, SvelteHTMLElements } from "svelte/elements";

type SvgAttrs = SVGAttributes<SVGGElement>;

export type IconNode = [elementName: keyof SvelteHTMLElements, attrs: SvgAttrs][];

export interface IconProps extends SvgAttrs {
  size?: string | number;
}
