import React, { useState } from "react";

export default function Keys() {
  const [list, setList] = useState([1, 2, 3, 4]);
  return (
    <div>
      <ul>
        {list.map((num, index) => (
          <li
            key={index + 1}
            onClick={() =>
              setList(list.filter((currentNum) => currentNum !== num))
            }
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
}
