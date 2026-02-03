import React from "react";
import timelineData from "../data/TimelineData";
import TimelineItem from "./TimeLineItem";

const Timeline = () => {
  return (
    <div
      style={{
        padding: "3rem 1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#f0f2f5",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          color: "#333",
          fontSize: "2.2rem",
        }}
      >
        📜 Línea del Tiempo de la Evolución de la Administracion en Infotmatica
      </h1>

      <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
        
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: "4px",
            height: "100%",
            background: "#4CAF50",
            transform: "translateX(-50%)",
          }}
        ></div>

        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} isLeft={index % 2 === 0} />
        ))}
      </div>

      <style>
        {`
          .timeline-item:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 12px 25px rgba(0,0,0,0.2);
          }
          .timeline-item:hover .timeline-img {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Timeline;