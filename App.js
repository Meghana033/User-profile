import React from "react";
import UserProfile from "./UserProfile";
import "./style.css";

function App() {

  const users = [
    {
      id: 1,
      name: "Suneetha",
      jobTitle: "Frontend Developer",
      company: "Delloite",
      email: "suneetha@gmail.com",
      phone: "9876543210"
    },

    {
      id: 2,
      name: "Asha",
      jobTitle: "UI/UX Designer",
      company: "Infosys",
      email: "anusha@gmail.com",
      phone: "9123456780"
    },

    {
      id: 3,
      name: "Manisha",
      jobTitle: "React Developer",
      company: "TCS",
      email: "meghana@gmail.com",
      phone: "9012345678"
    }
  ];

  return (
    <div className="container">

      <h1>User Profile Cards</h1>

      <div className="card-container">

        {
          users.map((user) => (
            <UserProfile
              key={user.id}
              user={user}
            />
          ))
        }

      </div>

    </div>
  );
}

export default App;