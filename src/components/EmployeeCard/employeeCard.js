import React from "react";
// import img from ""../../michael-scott.png""
// import friends from "../../friends.json";

function EmployeeCard(props) {


  return (
    <>
          <tr className="tableCell">
            <td className="tableCell"><img src={props.imageURL} alt="Employee"></img></td>
            <td className="tableCell">{props.firstName}</td>
            <td className="tableCell">{props.lastName}</td>
            <td className="tableCell">{props.department}</td>
            <td className="tableCell">{props.occupation}</td>
            <td className="remove tableCell" onClick={ () => props.filterArray(props.id)}>Fire</td>
          </tr>
    </>
  );
}

export default EmployeeCard;
