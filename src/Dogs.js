import React from "react";
import { Link } from "react-router-dom";

function Dogs(props) {
  const dogListItems = props.dogList.map((dogName, index) => {
    return (
      <li key={index}>
        <Link to={`/dogs/${dogName}`}>{dogName}</Link>
      </li>
    );
  });
  return (
    <div>
      <h1>DOGS!</h1>
      <ul>{dogListItems}</ul>
    </div>
  );
}

export default Dogs;
