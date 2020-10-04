import React, { useState } from "react";

const TeamForm = (props) => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });
  console.log(member)

  const submitForm = (event) => {
    event.preventDefault();
    props.addMember(member);
    setMember({ name: "", email: "", role: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input
        onChange={(event) => {
          setMember({ ...member, [event.target.name]: event.target.value });
        }}
        id="name"
        type="text"
        placeholder="Enter Name"
        value={member.name}
        name="name"
      />
      <label htmlFor="email">Email:</label>
      <input
        onChange={(event) => {
          setMember({ ...member, [event.target.name]: event.target.value });
        }}
        id="email"
        type="text"
        placeholder="Enter Email"
        value={member.email}
        name="email"
      />
      <label htmlFor="role">Role:</label>
      <input
        onChange={(event) => {
          setMember({ ...member, [event.target.name]: event.target.value });
        }}
        id="role"
        type="text"
        placeholder="Enter Role"
        value={member.role}
        name="role"
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default TeamForm;