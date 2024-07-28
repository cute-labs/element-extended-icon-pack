import { optimize } from "svgo";

export default function addSizeToSvg(svgString) {
  return optimize(svgString, {
    plugins: [
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [{ width: 32 }, { height: 32 }]
        }
      }
    ]
  }).data;
}
