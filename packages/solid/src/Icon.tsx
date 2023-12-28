import { type JSX, splitProps } from "solid-js";
import { Dynamic, For } from "solid-js/web";

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32",
  width: "24",
  height: "24"
};

interface SVGAttributes extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: string | number;
}

export type IconNode = [elementName: keyof JSX.IntrinsicElements, attrs: Record<string, string>][];

export type IconProps = SVGAttributes & {
  key?: string | number;
};

const Icon = (props: IconProps & { iconNode: IconNode }) => {
  const [localProps, rest] = splitProps(props, ["size", "iconNode", "children", "width", "height"]);

  return (
    <svg {...defaultAttributes} width={localProps.size} height={localProps.size} {...rest}>
      <For each={localProps.iconNode}>
        {([elementName, attrs]) => <Dynamic component={elementName} {...attrs} />}
      </For>
    </svg>
  );
};

export default Icon;
