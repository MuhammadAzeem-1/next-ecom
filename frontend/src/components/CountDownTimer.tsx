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
        <div className="flex flex-col gap-[5px] items-center">
          <p className="text-[12px] font-[500] des:text-[16px]">Days</p>
          <p className="font-[700] text-[22px] des:text-[32px]">
            {timeLeft.days > 0 ? timeLeft.days : 0}
          </p>
        </div>
        <span className="text-[#db4444] px-2 text-[26px] font-700">:</span>
        <div className="flex flex-col gap-[5px] items-center">
          <p className="text-[12px] font-[500] des:text-[16px]">Hours</p>
          <p className="font-[700] text-[22px] des:text-[32px]">
            {timeLeft.hours > 0 ? timeLeft.hours : 0}{" "}
          </p>
        </div>
        <span className="text-[#db4444] px-2 text-[26px] font-700">:</span>
        <div className="flex flex-col gap-[5px] items-center">
          <p className="text-[12px] font-[500] des:text-[16px]">minutes</p>
          <p className="font-[700] text-[22px] des:text-[32px]">
            {timeLeft.minutes > 0 ? timeLeft.minutes : 0}
          </p>
        </div>
        <span className="text-[#db4444] px-2 text-[26px] font-700">:</span>
        <div className="flex flex-col gap-[5px] items-center">
          <p className="text-[12px] font-[500] des:text-[16px]">seconds</p>
          <p className="font-[700] text-[22px] des:text-[32px]">
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
