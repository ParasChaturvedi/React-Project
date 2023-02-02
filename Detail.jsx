import React from "react";
import Sdata from "./Sdata";
import Card, { Champ } from "./Cards";
import { Link } from "react-router-dom";

function Detail(props) {
  return (
    <>
      <div className="view_detail">
        <table class="table">
          <thead>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phones</th>
          </thead>
          <Link to="/" element={<Champ />}>
            <button className="button button-danger">Hide Details</button>
          </Link>
          <tbody>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
          </tbody>
          <br />
        </table>
      </div>
      <div id="maindiv">
        <div className="head">
          <h5>Description</h5>
          <p>
            Providing service of domestic flight booking @ lowest price
            guaranteed and also for railway e ticket booking, also offering
            international flight tickets, giving services to our customers since
            1995. now going to start hajj and umrah very soon for our valuable
            customers it will be also @ very affordable prices.
          </p>
        </div>
        <br />
        <div className="description">
          <table>
            <thead>
              <th scope="col">Contact Person</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phones</th>
              <th scope="col">Address</th>
              <th scope="col">Website</th>
              <th scope="col">Company</th>
            </thead>
            <tbody>
              <td>{props.name}</td>
              <td>{props.username}</td>
              <td>{props.email}</td>
              <td>{props.phone}</td>
              <td>
                Kulas Light Apt. <br />
                556 Gwenborough 92998-3874
              </td>
              <td>{props.website}</td>
              <td>
                Deckow-Crist catchPhrase Proactive
                <br />
                didactic contingency synergize <br />
                scalable supply-chains"
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function grave(val) {
  return (
    <Detail
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

const Wow = () => {
  return <>{Sdata.map(grave)}</>;
};

export default Detail;
export { Wow };
