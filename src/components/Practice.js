import React, { useState } from "react";
import Child from "./Child";
import Keys from "./Keys";
import Sibling from "./Sibling";
import UnControlled from "./UnControlled";

export default function Practice() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Child value={text} />
      <Sibling value={text} />
      <UnControlled />
      <Keys />
    </div>
  );
}
