/** @format */
import React, { useState } from "react";
import Button from "../Button/Button";

const Main = () => {
  const [count, setCount] = useState(0);

  const inrement = () => setCount(count + 5);
  const decrement = () => setCount(count - 5);
  const handelChange = (e) => setCount(() => e.target.value);

  return (
    <main>
      <p> Потрачено {count} </p>
      <input type="number" value={count} onChange={handelChange} />
      <div>
        <Button titel={"Плюс"} onClikFn={inrement} />
        <Button titel={"Минус"} onClikFn={decrement} />
      </div>
    </main>
  );
};

export default Main;
