import './ButtonRandomizer.css';
import React, {MouseEventHandler} from "react";

interface RandomizerButtonProps {
  function: MouseEventHandler<HTMLButtonElement>;
  name: string;
}

const RandomizerButton: React.FC<RandomizerButtonProps> = (props) => {
  return (
      <button className="randomizer_btn" type="submit" onClick={props.function}>{props.name}</button>
  );
};

export default RandomizerButton;