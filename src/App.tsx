import React, {useState} from 'react';
import './App.css';
import LotteryBall from "./LotteryBall/LotteryBall";
import RandomizerButton from "./Button/ButtonRandomizer";

function App() {
  const [randomNumbers, setRandomNumbers] = useState([0,0,0,0,0]);

  const randomizer = () => {
    let session:number[] = [];

    do {
      let randomNumber: number = Math.floor(Math.random() * (36 - 5 + 1) + 5);
      if (session.length === 0) {
        session.push(randomNumber);
      } else {
        if (!session.includes(randomNumber)) {
          session.push(randomNumber);
        }
      }
    } while (session.length <= 4)

    session = session.sort((a:number, b:number) => a -b);

    return session;
  };



  const getRandomNumbers = () => {
    setRandomNumbers(randomizer);
  };

  return (
    <div className="app">
      <RandomizerButton name={'New numbers'} function={getRandomNumbers}/>
      <div className="balls_box">
        <LotteryBall ball_random_number={randomNumbers[0]}></LotteryBall>
        <LotteryBall ball_random_number={randomNumbers[1]}></LotteryBall>
        <LotteryBall ball_random_number={randomNumbers[2]}></LotteryBall>
        <LotteryBall ball_random_number={randomNumbers[3]}></LotteryBall>
        <LotteryBall ball_random_number={randomNumbers[4]}></LotteryBall>
      </div>
    </div>
  );
}

export default App;
