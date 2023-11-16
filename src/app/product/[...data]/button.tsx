'use client'

import { useState } from "react";

export function Button() {
  const [count, setCount] = useState();

  function onClick() {
    setCount((state: any) => state + 1);
  }

  return <button onClick={onClick}>Click to count</button>;
}
