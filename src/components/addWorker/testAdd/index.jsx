import React, { useState } from "react";
import "../add.css";
import { inputs } from "../../../constants/add";
import { useNavigate } from "react-router-dom";

const AddTest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkerInfo = { name, email, phone };
    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newWorkerInfo),
    })
      .then((res) => {
        alert("This Worker has been Hired Successfully Alhamdulillah");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
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
                  ? setName(e.target.value)
                  : v.forvalue == "email"
                  ? setEmail(e.target.value)
                  : setPhone(e.target.value);
              }}
              value={
                v.forvalue == "email"
                  ? email
                  : v.forvalue == "fulname"
                  ? name
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
            hire this worker
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTest;
