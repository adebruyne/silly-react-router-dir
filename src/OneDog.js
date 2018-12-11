import React from "react";

function OneDog(props) {
  return (
    <div>
      <h1>I amn {props.match.params.dogName}</h1>
    </div>
  );
}

export default OneDog;
