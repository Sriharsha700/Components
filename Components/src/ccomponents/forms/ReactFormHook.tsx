import React, { type FormEvent, useRef } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const form = useForm();
};

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  return (
    <form
      onSubmit={() => {
        event?.preventDefault();
        if (nameRef.current != null) person.name = nameRef.current.value;
        if (ageRef.current != null) person.age = parseInt(ageRef.current.value);
        console.log(person);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          value={person.name}
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          value={person.age}
          ref={ageRef}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
