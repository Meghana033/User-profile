import React from "react";

import ProfileCard from "./ProfileCard";
import "./style.css";

function App() {

  const employeeList = [

    {
      id: 101,
      fullName: "Meghana ",
      designation: "Frontend Engineer",
      organization: "Accenture",
      mail: "meghana@gmail.com",
      mobile: "9876501234"
    },

    {
      id: 102,
      fullName: "Abhinav",
      designation: "UI Designer",
      organization: "Wipro",
      mail: "Abhinav0304gmail.com",
      mobile: "9123409876"
    },

    {
      id: 103,
      fullName: "Divya",
      designation: "MERN Stack Developer",
      organization: "Capgemini",
      mail: "divya@gmail.com",
      mobile: "9011223344"
    },

    {
      id: 104,
      fullName: "Nandhini",
      designation: "Backend Developer",
      organization: "Tech Mahindra",
      mail: "nandhini@gmail.com",
      mobile: "9988776655"
    }
  ];

  return (

    <section className="main-wrapper">

      <h1 className="heading">
        Employee Profile Directory
      </h1>

      <div className="profiles-grid">

        {
          employeeList.map((employee) => (

            <ProfileCard
              key={employee.id}
              details={employee}
            />
          ))
        }

      </div>

    </section>
  );
}

export default App;
