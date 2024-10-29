import { useState } from "react";

export default function Challenge1() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible && <h1>1. Make this vanish</h1>}
      <button onClick={() => setVisible(!visible)}>Click me!</button>
    </div>
  );
}
