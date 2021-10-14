import React from "react";

const Greeter = (props) => {
  return (
    <header className="card mt-5 p-3 mb-3">
      <div className="card-body">
        <h2 className="greeting">
          {props.phrase} {props.name}!
        </h2>
      </div>
    </header>
  );
};

export default Greeter;
