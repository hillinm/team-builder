import React from "react";



const Team = props => {

  const handleDelete = (index) => {
    props.deleteMember(index)
  }

  return (
    <div className="team-list">
    <h1>Team List</h1>
      {props.team.map((member, index) => (
        <div className="note" key={member.name}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
          <button onClick={event => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Team;