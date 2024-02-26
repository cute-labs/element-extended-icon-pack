import { h } from "vue";
import { SVGAttributes, FunctionalComponent, computed } from "vue";

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
};

export interface IconProps extends SVGAttributes {
  size?: number | string;
  color?: string;
}

export type IconNode = [elementName: string, attrs: Record<string, string>][];

function isSafeSize(value: SVGAttributes["width"]) {
  return value !== null && value !== undefined;
}

const createIcon =
  (iconNode: IconNode): FunctionalComponent<IconProps> =>
  ({ size = 24, width, height, ...rest }) => {
    const svgW = computed(() => (isSafeSize(width) ? width : size));
    const svgH = computed(() => (isSafeSize(height) ? height : size));

    return h("svg", { ...defaultAttributes, width: svgW.value, height: svgH.value, ...rest }, [
      ...iconNode.map(([name, attrs]) => h(name, { ...attrs }))
    ]);
  };

export default createIcon;
