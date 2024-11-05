import React, { useEffect, useState } from "react";
import "./detail.css";
import "../admin panel/admin.css";
import { NavLink, useParams } from "react-router-dom";

const DetailsWorker = () => {
  const workerId = useParams();
  const [data, setData] = useState({});

  console.log(workerId, useParams);
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + workerId.id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(data, "data");
  return (
    <div className="main column-center">
      <div className="column-center container">
        <h1>Detailed info about worker</h1>
        <div className="column-center buttons-wrap">
          {data && (
            <p className="headline-title">
              Worker ID is: {data.name || data.fullName}
            </p>
          )}
          {data && (
            <p className="headline-title">Worker Email is: {data.email}</p>
          )}
          {data && (
            <p className="headline-title">
              Worker Phone Number is: {data.phone}
            </p>
          )}
        </div>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <button id="create-button-style" className="regular-button-design">
            Back TO All Workers
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DetailsWorker;
