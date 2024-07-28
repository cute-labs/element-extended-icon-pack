import { FillEleArrowCaretDouble } from "@element-extended-icon-pack/react";
import * as icons from "@element-extended-icon-pack/react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <FillEleArrowCaretDouble size={32} className="text-blue-500" />

      <div className="flex flex-wrap">
        {Object.entries(icons).map(([key, Icon]) => (
          <Icon key={key} size={28} />
        ))}
      </div>
    </div>
  );
}
