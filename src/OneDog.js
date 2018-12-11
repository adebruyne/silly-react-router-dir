import React from "react";

function OneDog(props) {
  const dogInfo = props.dogInfo;
  const dogName = props.match.params.dogName;
  const oneDogsInfo = dogInfo[dogName];
  const dogToysListItem = oneDogsInfo.toys.map(toy => {
    return <li>{toy}</li>;
  });
  return (
    <div>
      <h1>I amn {props.match.params.dogName}</h1>
      <h2>My owner is {oneDogsInfo.owner}</h2>
      <h3>Here are my toys:</h3>
      <ul>{dogToysListItem}</ul>
    </div>
  );
}

export default OneDog;
