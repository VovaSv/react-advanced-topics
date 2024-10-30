import { FormEvent, useRef } from "react";

export const UncontrolledForm = () => {
  const nameInputReef = useRef<HTMLInputElement>(null);
  const ageInputReef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(nameInputReef.current?.value);
    console.log(ageInputReef.current?.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" ref={nameInputReef} />
      <input type="number" name="age" ref={ageInputReef} />
      <input type="submit" value="Submit" />
    </form>
  );
};
