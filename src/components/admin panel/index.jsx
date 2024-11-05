import React, { useEffect, useState } from "react";
import "./admin.css";
import { admin, buttons } from "../../constants/admin";
import { NavLink } from "react-router-dom";

const AdminPanel = () => {
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setWorkers(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="main column-center">
      <div className="container column-center">
        <div className="headline-box center">
          {admin.map((v, i) => (
            <p key={i} className="headline-title">
              {v.headline}
            </p>
          ))}
        </div>
        {workers.map((v, i) => (
          <div key={i} className="headline-box center">
            <p className="headline-title">{v.id}</p>
            <p className="headline-title">{v.name || v.fullName}</p>
            <p className="headline-title">{v.email}</p>
            <p className="headline-title">{v.phone}</p>
            <div className="buttons-wrap center">
              {buttons.map((val, i) => (
                <NavLink to={`${val.urlToPage+v.id}`} style={{ textDecoration: "none" }}>
                  <button key={i} className={val.classnameOfButton}>
                    {val.titleOfButton}
                  </button>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
        <NavLink to="/add" style={{ textDecoration: "none" }}>
          <button className="action-button-add regular-button-design">
            Add
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminPanel;
