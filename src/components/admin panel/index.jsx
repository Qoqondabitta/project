import React from "react";
import "./admin.css";
import { admin } from "../../constants/admin";

const AdminPanel = () => {
  return (
    <div className="main column-center">
      <div className="container">
        <div className="headline-box center">
          {admin.map((v, i) => (
            <p key={i} className="headline-title">
              {v.headline}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
