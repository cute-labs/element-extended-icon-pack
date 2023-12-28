import { Title } from "@solidjs/meta";
import { Dynamic } from "solid-js/web";
import Counter from "~/components/Counter";
import { FillEleArrowCaretDouble } from "@element-extended-icon-pack/solid";
import * as icons from "@element-extended-icon-pack/solid";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>

      <FillEleArrowCaretDouble size={48} color="#335d92" />

      <div>
        {Object.entries(icons).map(([name, icon]) => (
          <Dynamic component={icon} key={name} size={18} color="#335d92" />
        ))}
      </div>

      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
