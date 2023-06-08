import React from "react";
import user from "../images/profile.jpg";
const ContactCard = (props)=>{
    // Destructuring of props
    const {id, name, email}= props.contact;
    console.log(props.contact)
    return(
    <div className="item" style={{padding:"10px", margin:"10px"}}>
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header"><h3>{name}</h3></div>
          <div>{email}</div>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={()=> props.clickHandler(id)}></i>
    </div>
    );
}

export default ContactCard;