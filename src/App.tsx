import React, {useState} from 'react';
import './App.css';
import LotteryBall from "./LotteryBall/lotteryBall";
import RandomizerButton from "./Button/buttonRandomizer";

function App() {
  const [randomNumbers, setRandomNumbers] = useState([0,0,0,0,0]);

  const getRandomNumbers = () => {
    setRandomNumbers(randomizer);
  };


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
    return session;
  };

  randomizer();

  return (
    <div className="app">
      <button onClick={getRandomNumbers}>New numbers</button>
      <LotteryBall ball_random_number={randomNumbers[0]}></LotteryBall>
      <LotteryBall ball_random_number={randomNumbers[1]}></LotteryBall>
      <LotteryBall ball_random_number={randomNumbers[2]}></LotteryBall>
      <LotteryBall ball_random_number={randomNumbers[3]}></LotteryBall>
      <LotteryBall ball_random_number={randomNumbers[4]}></LotteryBall>
    </div>
  );
}

export default App;
