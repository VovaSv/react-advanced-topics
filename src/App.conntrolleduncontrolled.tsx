import { useState } from "react";
import { ControlledForm } from "./components/controlled-uncontrolled/controlled-form";
import { UncontrolledForm } from "./components/controlled-uncontrolled/uncontrolled-form";
import { UncontrolledModal } from "./components/controlled-uncontrolled/uncontrolled-modal";
import { ControlledModal } from "./components/controlled-uncontrolled/controlled-modal";
import { UncontrolledFlow } from "./components/controlled-uncontrolled/uncontrolled-flow";

const StepOne = ({ goNext }: any) => {
  return (
    <>
      <button onClick={() => goNext({ dataStep1: "data1" })}>Next</button>
      <h1>Step 1</h1>
    </>
  );
};
const StepTwo = ({ goNext }: any) => {
  return (
    <>
      <button onClick={() => goNext({ dataStep2: "data2" })}>Next</button>
      <h1>Step 2</h1>
    </>
  );
};
const StepThree = ({ goNext }: any) => {
  return (
    <>
      <button onClick={() => goNext({ dataStep3: "data3" })}>Next</button>
      <h1>Step 3</h1>
    </>
  );
};

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

      <UncontrolledFlow onDone={() => console.log("We Done ")}>
        <StepOne />
        <StepTwo skip={true} />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
