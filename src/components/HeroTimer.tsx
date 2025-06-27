'use client';

import { useEffect, useState } from "react";

interface HeroTimerProps {
  className?: string;
}

const HeroTimer: React.FC<HeroTimerProps> = ({ className }) => {
  const classNameValue = className ? `${className}` : '';
  const [days, setDays] = useState(2);
  const [hours, setHours] = useState(18);
  const [minutes, setMinutes] = useState(56);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds == 0) {
        setSeconds(59);
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    if(seconds == 0) {
        if(minutes > 0) {
            setMinutes(minutes - 1);
        }
        else {
            setMinutes(59);
        }
    }
    if(minutes == 0 && hours > 0 && seconds == 0) {
        setHours(hours - 1);
    }
    if(hours == 0 && days > 0 && minutes == 0 && seconds == 0) {
        setDays(days - 1);
        setHours(23);
    }
  }, [seconds]);

  return (
    <div className={`flex justify-center md:justify-start gap-10 ${classNameValue}`}>
      <div className="text-center">
        <p className="font-semibold text-[26px] leading-none tracking-[-0.01em]">
          {days}
        </p>
        <p className="mt-8 font-semibold text-[11px] text-bunker/50 leading-none tracking-[-0.01em]">
          DAYS
        </p>
      </div>
      <p className="font-semibold text-[18px] leading-none pt-3">:</p>
      <div className="text-center">
        <p className="font-semibold text-[26px] leading-none tracking-[-0.01em]">
          {hours}
        </p>
        <p className="mt-8 font-semibold text-[11px] text-bunker/50 leading-none tracking-[-0.01em]">
          HOURS
        </p>
      </div>
      <p className="font-semibold text-[18px] leading-none pt-3">:</p>
      <div className="text-center">
        <p className="font-semibold text-[26px] leading-none tracking-[-0.01em]">
          {minutes}
        </p>
        <p className="mt-8 font-semibold text-[11px] text-bunker/50 leading-none tracking-[-0.01em]">
          MINUTES
        </p>
      </div>
    </div>
  );
};

export default HeroTimer;
