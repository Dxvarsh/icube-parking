import React, { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";

function StatsCard({ icon, value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref,  {
    threshold: 1,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    animateCount(0, value, 2000, setCount);
  }, [value, isInView]);

  return (
    <div ref={ref} className="h-48 bg-white p-6 mt-4 flex flex-col justify-end rounded-lg shadow-lg relative text-center">
      <div className="icon-div absolute left-1/2 -top-7 md:-top-10 transform -translate-x-1/2 rounded-full p-2 md:p-3 w-28 h-28 md:w-32 md:h-32 bg-white">
        <div className="w-full h-full p-3 md:p-5 rounded-full mx-auto mb-4 border-2 border-dashed border-[#ED5E24]">
          <img src={icon} />
        </div>
      </div>

      <div className="">
        <p className="text-3xl font-bold text-[#ED5E24]">
          {count}+
        </p>
        <p className="text-black text-sm">{label}</p>
      </div>
    </div>
  );
}

function animateCount(start, end, duration, setCount) {
  let current = start;
  const increment = end / (duration / 16);
  const interval = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(interval);
    }
    setCount(Math.round(current));
  }, 16);
}

export default StatsCard;
