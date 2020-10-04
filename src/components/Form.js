import React from "react";

const Team = props => {
  return (
    <div className="team-list">
    <h1>Team List</h1>
      {props.team.map(member => (
        <div className="note" key={member.name}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;