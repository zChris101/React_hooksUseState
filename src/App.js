import React, { useState } from "react";

export default function App() {

  setInterval(updateTime,1000);

  const now = new Date().toLocaleTimeString("en-US", { hour12: false });

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setTime(newTime);
  }

  console.log(time);
  return (

    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>

  );
}
