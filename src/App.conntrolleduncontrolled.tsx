import { useState } from "react";
import { ControlledForm } from "./components/controlled-uncontrolled/controlled-form";
import { UncontrolledForm } from "./components/controlled-uncontrolled/uncontrolled-form";
import { UncontrolledModal } from "./components/controlled-uncontrolled/uncontrolled-modal";
import { ControlledModal } from "./components/controlled-uncontrolled/controlled-modal";

function App() {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <UncontrolledModal />
      <ControlledModal show={modalState} setShow={setModalState} />
      <br />
      <button onClick={() => setModalState((prevState) => !prevState)}>
        {" "}
        {modalState ? "Hide" : "Show"} {" Controlled Modal"}
      </button>
    </>
  );
}

export default App;
