import React, { useEffect, useState } from "react";
import "./edit.css";
import "../admin panel/admin.css";
import { useNavigate, useParams } from "react-router-dom";
import { editInputs } from "../../constants/edit";

const EditWorker = () => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const workerId = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  console.log(workerId, "it is worker id");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorker = { fullName, email, phone };
    fetch("http://localhost:8000/employee/"+workerId.id, {
      method: "PUT",
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

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + workerId.id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setFullName(resp.fullName || resp.name);
        setEmail(resp.email);
        setPhone(resp.phone);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="main column-center">
      <div className="center container">
        <form
          className="regular-form-style column-center"
          onSubmit={handleSubmit}
        >
          {editInputs.map((v, i) => (
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

export default EditWorker;
