import React from "react";
import "../styles/style.css";
import { university } from "../constant/constant";
const TeamPage = () => {
  return (
    <div>
      <h1 className="heading">Team Page</h1>
      <p className="paragraph">
        Learn, from Scientists, research scholors for the top Institutes in the
        world
      </p>
      <div className="university-list">
        {university.map((university, id) => (
          <div key={id} className="list">
            <p>{university.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
