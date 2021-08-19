import React from "react";

export function Header(props) {
  Header.defaultProps = {
    title: "some default",
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
}
