"use client";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date()); // Initialize with current date and time

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Updates every second

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Format time and date
  const formattedTime = time.toLocaleTimeString();
  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col p-4 text-black rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold">{formattedTime}</h1>
      <h2 className="text-xl mt-2">{formattedDate}</h2>
    </div>
  );
};

export default Clock;
