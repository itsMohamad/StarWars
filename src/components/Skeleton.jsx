import React from "react";
import "../css/Skeleton.css";
const Skeleton = () => {
  return (
    <>
      <div className="skeleton">
        <div className="skeleton__block"></div>
        <div className="skeleton__block"></div>
        <div className="skeleton__block"></div>
      </div>

      <div className="skeleton">
        <div className="skeleton__block"></div>
        <div className="skeleton__block"></div>
        <div className="skeleton__block"></div>
      </div>

      <div className="skeleton">
        <div className="skeleton__block"></div>
        <div className="skeleton__block"></div>
        <div className="skeleton__block"></div>
      </div>
    </>
  );
};

export default Skeleton;
