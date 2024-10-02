import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = useState(0);
  const [btn, setBtn] = useState(false);

  const Time = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSec = seconds % 60;
    return `${minutes}:${remainingSec < 10 ? "0" : ""}${remainingSec}`;
  };

  function Start() {
    setBtn(!btn);
  }

  function Reset() {
    setBtn(false);
    setData(0);
  }

  useEffect(() => {
    let intervalID = "";
    if (btn) {
      intervalID = setInterval(() => {
        setData((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalID);
    }
    return () => clearInterval(intervalID);
  }, [btn]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      <h1>Stopwatch</h1>
      <span>Time: {Time(data)}</span>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <button onClick={Start}>{btn ? "Stop" : "Start"}</button>

        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
