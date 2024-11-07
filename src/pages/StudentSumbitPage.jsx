import React, { useState } from "react";
import { useForm } from "react-hook-form";

const StudentSumbitPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await fetch(`${import.meta.env.VITE_API_URL}/students`, {
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        major: data.major,
        school: data.school,
      }),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    });
  };

  // 1. add onChange handlers to each input to update the state
  // 2. add onSubmit handler to the form to submit the data

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First Name"
        {...register("firstName")}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName")}
        value={lastName}
      />
      <input
        type="text"
        placeholder="Major"
        {...register("major")}
        value={major}
      />
      <input
        type="text"
        placeholder="School"
        {...register("school")}
        value={school}
      />
      <button type="button">Submit</button>
    </form>
  );
};

export default StudentSumbitPage;
