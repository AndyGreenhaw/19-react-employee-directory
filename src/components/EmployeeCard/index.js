import React from "react";
// import friends from "../../friends.json";

function EmployeeCard(props) {


  return (
    <>
          <tr className="tableCell">
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
