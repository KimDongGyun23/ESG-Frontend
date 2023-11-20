import { useEffect, useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  function addNumber(e) {
    setNumber(number + 1);
    console.log(number);
  }

  useEffect(() => {
    console.log("Counter render isLogin : ");
  });

  return (
    <div>
      <span>{number}</span>
      <button type="button" onClick={addNumber}>
        Add Number
      </button>
    </div>
  );
}

export default Counter;
