import React from "react";
import { Link } from "react-router-dom";


function ContactCard(props) {
  return (
    <div className="cards">
      <h3>{props.name}</h3>
      <Link to={props.Github}>Visit me on Github</Link>
      <Link to={props.email}>Email me!</Link>
    </div>
  );
}

export default ContactCard;
