import React, { useState } from "react";

const StudentSumbitPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [major, setMajor] = useState("");
  const [school, setSchool] = useState("");

  // 1. add onChange handlers to each input to update the state
  // 2. add onSubmit handler to the form to submit the data

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <input
        type="text"
        placeholder="Major"
        onChange={(e) => setMajor(e.target.value)}
        value={major}
      />
      <input
        type="text"
        placeholder="School"
        onChange={(e) => setSchool(e.target.value)}
        value={school}
      />
      <button
        type="button"
        onClick={async (e) => {
          console.log({ firstName, lastName });

          await fetch(`${import.meta.env.VITE_API_URL}/students`, {
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              major: major,
              school: school,
            }),
            headers: {
              "content-type": "application/json",
            },
            method: "POST",
          });
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default StudentSumbitPage;
