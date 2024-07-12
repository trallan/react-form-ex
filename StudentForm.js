import React, { useState } from "react";
import styles from "./StudentForm.module.css";

function StudentForm() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
    Adress: "",
    classNumber: "",
    studentID: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          name="firstName"
          value={userDetails.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={userDetails.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="age"
          value={userDetails.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="adress"
          value={userDetails.adress}
          onChange={handleChange}
          placeholder="Adress"
        />
        <input
          type="text"
          name="classNumber"
          value={userDetails.classNumber}
          onChange={handleChange}
          placeholder="Homeroom class number"
        />
        <input
          type="text"
          name="studentID"
          value={userDetails.studentID}
          onChange={handleChange}
          placeholder="Student ID"
        />
      </form>
      <div>
        <h1 className={styles.h1}>Recieved data</h1>
        {userDetails.map((key, value) => (
          <p key={key}: {value}</p>
        ))}
      </div>
    </>
  );
}

export default StudentForm;
