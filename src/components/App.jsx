import React, { useState } from "react";

function App() {
  setInterval(refresh, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function refresh() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refresh}>Get Time</button>
    </div>
  );
}

export default App;
