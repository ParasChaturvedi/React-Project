import React from "react";
import Sdata from "./Sdata";
import {Link} from "react-router-dom";

function Card(props) {
  return (
    <>
      <table class="table">
        <thead>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
        </thead>
        <Link to="/detail"> 
          <button className="button button-danger">View Details</button> 
        </Link>
        <tbody>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.username}</td>
          <td>{props.email}</td>
        </tbody>
      </table>
    </>
  );
}
function leadzen(val) {
  return (
    <Card
      id={val.id}
      name={val.name}
      username={val.username}
      email={val.email}
      address={val.street}
      city={val.city}
      zipcode={val.zipcode}
      phone={val.phone}
      website={val.website}
      suite={val.suite}

    />
  );
}

const Champ = () => {
  return <>{Sdata.map(leadzen)}</>;
};

export default Card;
export {Champ};
