import React, { useState } from "react";

export default function Keys() {
  const [list, setList] = useState([1, 2, 3, 4]);
  return (
    <div>
      {list.map((num, index) => (
        <div
          key={index + 1}
          onClick={() =>
            setList(list.filter((currentNum) => currentNum !== num))
          }
        >
          {num}
        </div>
      ))}
    </div>
  );
}
