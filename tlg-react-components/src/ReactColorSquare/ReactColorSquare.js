import React from "react";
import './ReactColorSquare.scss';

const ReactColorSquare = props => {
  const { width, height, color, text } = props;
  return (
    <div className="react-color-square"
      style={{
        width: width || 100,
        height: height || 100,
        backgroundColor: color || "blue"
      }}
    >
      {text}
    </div>
  );
};

export default ReactColorSquare;
