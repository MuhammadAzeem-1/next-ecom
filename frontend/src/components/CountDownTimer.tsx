import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<{ deadline: string }> = ({ deadline }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="hidden flex gap-[0.6rem] items-center capitalize tab:inline-flex">
        <div className="countdownTimer-block">
          <p className="countdownTimer-block-para">Days</p>
          <p className="countdownTimer-block-para2 ">
            {timeLeft.days > 0 ? timeLeft.days : 0}
          </p>
        </div>
        <span className="countdownTimer-block-colon">:</span>
        <div className="countdownTimer-block">
          <p className="countdownTimer-block-para">Hours</p>
          <p className="countdownTimer-block-para2 ">
            {timeLeft.hours > 0 ? timeLeft.hours : 0}{" "}
          </p>
        </div>
        <span className="countdownTimer-block-colon">:</span>
        <div className="countdownTimer-block">
          <p className="countdownTimer-block-para">minutes</p>
          <p className="countdownTimer-block-para2 ">
            {timeLeft.minutes > 0 ? timeLeft.minutes : 0}
          </p>
        </div>
        <span className="countdownTimer-block-colon">:</span>
        <div className="fcountdownTimer-block">
          <p className="countdownTimer-block-para">seconds</p>
          <p className="countdownTimer-block-para2 ">
            {timeLeft.seconds > 0 ? timeLeft.seconds : 0}
          </p>
        </div>
      </div>
      <div className="tab:hidden">
        <p className="text-[#db4444] text-[16px] tab:text-[22px] font-800 tracking-[2px]">
          {timeLeft.days > 0 ? timeLeft.days : 0} Days Left!
        </p>
      </div>
    </>
  );
};

export default CountdownTimer;
