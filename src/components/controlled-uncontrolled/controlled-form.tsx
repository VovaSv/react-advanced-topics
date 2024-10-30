import { FormEvent, useEffect, useRef, useState } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <form>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input type="submit" value="Submit" />
      <button>Submit</button>
      {/**
       * 
       * <input type="submit" value="Submit" />: This is specifically designed for submitting forms. When placed inside a <form>, it will trigger the form’s submission action by default.
            <button>: A <button> element is more versatile. It can have three types:
            <button type="submit"> (default in a form context): Submits the form.
            <button type="button">: Does nothing by default. It’s used to trigger JavaScript functions, for example.
            <button type="reset">: Resets the form fields to their default values.
       */}
    </form>
  );
};
