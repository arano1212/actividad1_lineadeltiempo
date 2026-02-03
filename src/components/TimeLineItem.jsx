import React, { useState } from "react";

const TimelineItem = ({ item, isLeft }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "45%",
        padding: "1.5rem",
        margin: "2rem 0",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
        left: isLeft ? "0" : "55%",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="timeline-item"
    >
      <h2 style={{ color: "#4CAF50", marginBottom: "0.5rem" }}>{item.year}</h2>
      <h3 style={{ marginBottom: "1rem", color: "#222" }}>{item.title}</h3>
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "1rem",
          objectFit: "cover",
          height: "200px",
          transition: "transform 0.3s",
        }}
        className="timeline-img"
      />
      {hovered && (
        <p style={{ color: "#555", lineHeight: "1.5", transition: "opacity 0.3s" }}>
          {item.description}
        </p>
      )}

    
      <span
        style={{
          position: "absolute",
          top: "1.5rem",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "#4CAF50",
          left: isLeft ? "100%" : "-10%",
          transform: "translateX(-50%)",
          border: "4px solid #fff",
        }}
      ></span>
    </div>
  );
};

export default TimelineItem;