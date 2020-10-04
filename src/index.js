import React, { useState } from "react";
import ReactDOM from "react-dom";
import TeamForm from "./components/TeamForm";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Mark Hillin",
      email: "mark.hillin@gmail.com",
      role: "Student"
    }
  ]);

  console.log(team)

  const addMember = (member) => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };

    setTeam([...team, newMember]);
  };
  return (
    <div className="App">
      <h1>Mark's Team</h1>
      <TeamForm addMember={addMember} />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
    <App />,
  rootElement
);

