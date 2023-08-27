import React, { useEffect, useState } from "react";
import "../styles/style.css";
import axios from "axios";
import { advisor } from "../constant/constant";
import { BiLogoTelegram } from "react-icons/bi";

const Mentors = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users?limit=12");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="mentors">
        <h1 className="heading">Meet Our Mentors</h1>
        <div className="card">
          {users.map((user) => (
            <div className="card-items" key={user.id}>
              <img src={user.image} alt={user.id} className="image" />
              <div className="details">
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
                <h3>{user.university}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mentor and Adviser */}
      <div className="advisor">
        <h1 className="heading-advisor">Mentor and Advisor </h1>
        <div className="advisor-container">
          {advisor.map((user, id) => (
            <div className="advisor-item" key={id}>
              <img src={user.image} alt={id} className="advisor-image" />
              <div className="advisor-details">
                <h2>{user.name}</h2>
                <h3>{user.position}</h3>
                <button className="button" style={{ display: user.style }}>
                  {user.message} <BiLogoTelegram />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mentors;
