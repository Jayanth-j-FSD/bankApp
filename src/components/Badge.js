import React from "react";

const Badge = ({ count, colour }) => {
  return (
    <div>
      {colour === "red" && (
        <span className="badge badge-red rounded-pill bg-danger">{count}</span>
      )}
      {colour === "black" && (
        <span className="badge-black badge-transparent">{count}</span>
      )}
    </div>
  );
};

export default Badge;
