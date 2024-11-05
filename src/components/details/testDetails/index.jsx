import React, { useEffect, useState } from "react";
import "../../admin panel/admin.css";
import "../detail.css";
import { NavLink, useParams } from "react-router-dom";

const DetailsTest = () => {
  const [info, setInfo] = useState({});
  const workerId = useParams();
  console.log(workerId);
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + workerId.id)
      .then((resp) => resp.json())
      .then((res) => {
        setInfo(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(info, "this is info");
  return (
    <div className="column-center main">
      <h1>DetailsTest</h1>
      <div className="column-center container">
        <div className="column-center buttons-wrap">
          <p className="headline-title">This is name:{info.name}</p>
          <p className="headline-title">This is email:{info.email}</p>
          <p className="headline-title">This is phone:{info.phone}</p>
        </div>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <button id="create-button-style" className="regular-button-design">
            Back to all workers
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DetailsTest;
