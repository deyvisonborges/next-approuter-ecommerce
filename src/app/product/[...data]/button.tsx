"use client";

import { useState } from "react";
import { ClientBoundarie } from "./clientboundarie";

export function Button() {
  const [count, setCount] = useState();

  function onClick() {
    setCount((state: any) => state + 1);
  }

  return (
    <div>
      <button onClick={onClick}>Click to count</button>
      <ClientBoundarie />
    </div>
  );
}
