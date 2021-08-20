import React from "react";
import "./Hedder.css";
export function Header(props) {
  Header.defaultProps = {
    title: "some default",
  };
  return (
    <div className="head">
      <div className="container">
        <h1 className="head__title">{props.title}</h1>
        <h2 className="head__subtitle">{props.subTitle}</h2>
      </div>
    </div>
  );
}
