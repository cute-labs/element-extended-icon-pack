import type { MetaFunction } from "@remix-run/node";
import { FillEleArrowCaretDouble } from "@element-extended-icon-pack/react";
import * as icons from "@element-extended-icon-pack/react";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <FillEleArrowCaretDouble size={48} />

      <div>
        {Object.entries(icons).map(([key, Icon]) => (
          <Icon key={key} size={28} color="oklch(63.612% 0.1522 78.748)" />
        ))}
      </div>

      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
