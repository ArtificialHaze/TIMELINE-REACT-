import "./App.css";
import React from "react";

const InfoItem = ({ title, time, pos, left, color }) => {
  return (
    <div className={`info-${pos}`} style={{ left: left }}>
      <div className="dot" style={{ background: color }}></div>
      <div className="panel" style={{ background: color }}>
        {title}
        <div className="time" style={{ color: color }}>
          {time}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="timeline">
      <InfoItem
        left="20px"
        color="#e74c3c"
        pos={"up"}
        title="First item"
        time="1 Day"
      />
      <InfoItem
        color="#f9cf00"
        left="100px"
        pos={"down"}
        title="Second item"
        time="2 Days"
      />
      <InfoItem
        color="#00c03f"
        left="200px"
        pos={"up"}
        title="Third item"
        time="3 Days"
      />
    </div>
  );
};

export default App;
