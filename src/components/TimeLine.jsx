import React from "react";
import timelineData from "../data/TimelineData";
import TimelineItem from "./TimeLineItem";

const Timeline = () => {

  const bibliografia = [
    "Hernández, M. A. (2005). Administración de la Informática. Alfaomega Grupo Editor.",
    "López, R. (2018). Administración de la función informática: teoría y práctica. Universidad de Guadalajara.",
    "Rodríguez, J. J. (2018). Administración de recursos informáticos: aplicando las mejores prácticas con COBIT 5. Digitalicce.",
    "Laudon, K. & Laudon, J. (2020). Sistemas de información gerencial. Pearson Educación."
  ];

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
        📜 Línea del Tiempo de la Evolución de la Administración en Informática
      </h1>

      <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
        {/* Línea central */}
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

        <div
          style={{
            position: "relative",
            width: "70%",
            padding: "2rem",
            margin: "3rem auto",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#4CAF50",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            📚 Bibliografía
          </h2>
          <ul style={{ color: "#555", lineHeight: "1.6" }}>
            {bibliografia.map((fuente, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {fuente}
              </li>
            ))}
          </ul>
        </div>
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