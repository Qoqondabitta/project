import React, { useEffect, useState } from "react";
import "../../admin panel/admin.css";
import { useNavigate, useParams } from "react-router-dom";

const EditTest = () => {
  const [name, setNewName] = useState("");
  const [email, setNewEmail] = useState("");
  const [phone, setNewPhone] = useState("");
  const workerId = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:8000/employee/` + workerId.id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setNewName(resp.name);
        setNewEmail(resp.email);
        setNewPhone(resp.phone);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWorkerInfo = { name, email, phone };
    fetch(`http://localhost:8000/employee/` + workerId.id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedWorkerInfo),
    })
      .then((res) => {
        alert(
          "Personal Information of this worker has been updated successfully Alhamdulillah"
        );
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="column-center main">
      <div className="column-center container">
        <form
          onSubmit={handleSubmit}
          className="column-center regular-form-style"
        >
          <input
            value={name}
            onChange={(e) => setNewName(e.target.value)}
            className="regular-input-style"
            placeholder="Edit Full Name"
          />
          <input
            onChange={(e) => setNewEmail(e.target.value)}
            value={email}
            className="regular-input-style"
            placeholder="Edit Email Address"
          />
          <input
            value={phone}
            onChange={(e) => setNewPhone(e.target.value)}
            className="regular-input-style"
            placeholder="Edit Phone Number"
          />
          <button
            id="create-button-style"
            type="submit"
            className="regular-button-design"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTest;
