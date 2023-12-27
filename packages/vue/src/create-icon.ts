import { h } from "vue";
import type { SVGAttributes, FunctionalComponent } from "vue";

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
};

export interface IconProps extends SVGAttributes {
  size?: number | string;
  color?: string;
}

export type IconNode = [elementName: string, attrs: Record<string, string>][];

const createIcon =
  (iconNode: IconNode): FunctionalComponent<IconProps> =>
  ({ size = 24, ...rest }) => {
    return h("svg", { ...defaultAttributes, width: size, height: size, ...rest }, [
      ...iconNode.map(([name, attrs]) => h(name, { ...attrs }))
    ]);
  };

export default createIcon;
