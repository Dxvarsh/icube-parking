import React from 'react'
import rating from "../assets/images/rating.png";
import satisfaction from "../assets/images/satisfaction.png";
import completed_task from "../assets/images/completed-task.png";
import easy_installation from "../assets/images/easy-installation.png";
import StatCard from "./StatsCard";

const Counter = () => {
    const stats = [
        { icon: satisfaction, value: 8, label: "Years of Quality" },
        { icon: rating, value: 50, label: "Satisfied Customers" },
        { icon: completed_task, value: 25, label: "Range of Products" },
        { icon: easy_installation, value: 2000, label: "Units Produced & Installed" },
      ];
  return (
    <div className="counter-code bg-[#ED5E24] py-12 text-white">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {stats.map(((stat, index) => (
            <StatCard key={index} icon={stat.icon} value={stat.value} label={stat.label} />
        )))}
    </div>
    </div>
  )
}


export default Counter