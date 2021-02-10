import React, { useRef, useEffect } from "react";

export default function UnControlled() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => alert(inputRef.current.value)}>Alert!</button>
    </div>
  );
}
