import React, { useState } from "react";
import "./add.css";
import "../admin panel/admin.css";
import { inputs } from "../../constants/add";
import { useNavigate } from "react-router-dom";

const AddWorker = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //   console.log(fullName, email, phone);
    const newWorker = { fullName, email, phone };
    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newWorker),
    })
      .then((res) => {
        alert("Added Successfully Alhamdulillah!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="main column-center">
      <div className="center container">
        <form
          className="regular-form-style column-center"
          onSubmit={handleSubmit}
        >
          {inputs.map((v, i) => (
            <input
              key={i}
              required
              onChange={(e) => {
                v.forvalue == "fulname"
                  ? setFullName(e.target.value)
                  : v.forvalue == "email"
                  ? setEmail(e.target.value)
                  : setPhone(e.target.value);
              }}
              value={
                v.forvalue == "email"
                  ? email
                  : v.forvalue == "fulname"
                  ? fullName
                  : phone
              }
              className="regular-input-style"
              placeholder={v.title}
            />
          ))}
          <button
            id="create-button-style"
            type="submit"
            className="regular-button-design"
          >
            hire new worker
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWorker;
