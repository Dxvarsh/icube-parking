import React, {useState, useEffect} from 'react'

function StatsCard({ icon, value, label }) {
  // const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    animateCount(0, value, 2000, setCount);
  }, [value])

  return (
    <div className="h-48 bg-white p-6 mt-3 flex flex-col justify-end rounded-lg shadow-lg relative text-center">
      <div className="icon-div absolute left-1/2 -top-5 md:-top-10 transform -translate-x-1/2 rounded-full p-2 md:p-3 w-16 h-16 md:w-24 md:h-24 bg-white">
        <div className="w-full h-full p-3 md:p-5 rounded-full mx-auto mb-4 border-2 border-dashed border-[#ED5E24]">
          <img src={icon} />
        </div>
      </div>

      <div className=''>
        <p className="text-3xl font-bold text-[#ED5E24]">{count}+</p>
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