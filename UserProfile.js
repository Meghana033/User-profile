import React, { useState } from "react";

function UserProfile({ user }) {

  const [showMore, setShowMore] = useState(false);

  return (

    <div className="card">

      <h2>{user.name}</h2>

      <p>
        <strong>Job Title:</strong> {user.jobTitle}
      </p>

      <p>
        <strong>Company:</strong> {user.company}
      </p>

      {
        showMore && (
          <>
            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
          </>
        )
      }

      <button onClick={() => setShowMore(!showMore)}>

        {
          showMore ? "Show Less" : "Show More"
        }

      </button>

    </div>
  );
}

export default UserProfile;