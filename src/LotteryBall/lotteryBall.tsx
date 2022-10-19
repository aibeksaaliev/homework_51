import React from "react";

interface LotteryBallProps extends React.PropsWithChildren {
  ball_random_number: number;
}

const LotteryBall: React.FC<LotteryBallProps> = (props) => {
  return (
    <div className="lottery_ball">
      <span>{props.ball_random_number}</span>
    </div>
  );
};

export default LotteryBall;