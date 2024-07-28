import { FillEleArrowCaretDouble } from "@element-extended-icon-pack/solid";
import * as icons from "@element-extended-icon-pack/solid";
import { Dynamic } from "solid-js/web";

export default function Home() {
  return (
    <main>
      <FillEleArrowCaretDouble size={32} />

      <div>
        {Object.entries(icons).map(([name, icon]) => (
          <Dynamic component={icon} key={name} size={18} color="#335d92" />
        ))}
      </div>
    </main>
  );
}
