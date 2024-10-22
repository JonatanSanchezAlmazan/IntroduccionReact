import { useState } from "react";
import "./ShowCount.css";
import Button from "../Button/Button";
import { decrementCount, incrementCount } from "../Utils/incrementDecrement";

const ShowCount = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="content">
      <h2>You clicked here {count} time</h2>
      <div className="content__btn">
        <Button
          text="Restar"
          bgColor="violet"
          color="white"
          onClick={() => decrementCount(count, setCount)}
        ></Button>
        <Button
          text="Sumar"
          bgColor="blue"
          color="white"
          onClick={() => incrementCount(count, setCount)}
        ></Button>
      </div>
    </div>
  );
};

export default ShowCount;
