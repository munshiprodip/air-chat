import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <p>
        <span>
          <i className="far fa-comment-alt"></i>{" "}
        </span>{" "}
        Loading ...
      </p>
    </div>
  );
};

export default Preloader;
