import './ButtonRandomizer.css';
import {MouseEventHandler} from "react";

type Test = {
  test: MouseEventHandler<HTMLButtonElement>,
  name: string,
  styleCss: string
};

const RandomizerButton = (props: Test) => {
  return (
      <button className={props.styleCss} type="submit" onClick={props.test}>{props.name}</button>
  );
};

export default RandomizerButton;