import { useState } from "react";
import { ControlledForm } from "./components/controlled-uncontrolled/controlled-form";
import { UncontrolledForm } from "./components/controlled-uncontrolled/uncontrolled-form";
import { UncontrolledModal } from "./components/controlled-uncontrolled/uncontrolled-modal";
import { ControlledModal } from "./components/controlled-uncontrolled/controlled-modal";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <UncontrolledModal />
      <ControlledModal show={show} setShow={setShow} />
      <br />
      <button onClick={() => setShow(!show)}>
        {" "}
        Controll Modal From Outside
      </button>
    </>
  );
}

export default App;
