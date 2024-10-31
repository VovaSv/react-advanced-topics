import { useState } from "react";
import { ControlledForm } from "./components/controlled-uncontrolled/controlled-form";
import { UncontrolledForm } from "./components/controlled-uncontrolled/uncontrolled-form";
import { UncontrolledModal } from "./components/controlled-uncontrolled/uncontrolled-modal";
import { ControlledModal } from "./components/controlled-uncontrolled/controlled-modal";
import { UncontrolledFlow } from "./components/controlled-uncontrolled/uncontrolled-flow";
import { ControlledFlow } from "./components/controlled-uncontrolled/controlled-flow";

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
      <button onClick={() => goNext({ dataStep2: "data2", age: 23 })}>
        Next
      </button>
      <h1>Step 2</h1>
    </>
  );
};
const StepThree = ({ goNext }: any) => {
  return (
    <>
      <button onClick={() => goNext({ dataStep3: "data3" })}>Next</button>
      <h1>Successfully Finished Step 3</h1>
    </>
  );
};
const StepFour = ({ goNext }: any) => {
  return (
    <>
      <button onClick={() => goNext({ dataStep3: "data3" })}>Next</button>
      <h1>Step 4</h1>
    </>
  );
};

function App() {
  const [modalState, setModalState] = useState(false);

  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (currentStepData: any) => {
    setData({ ...data });
    setCurrentStepIndex(currentStepIndex + 1);
  };

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

      <h1>UncontrolledFlow</h1>
      <UncontrolledFlow onDone={() => console.log("We Done ")}>
        <StepOne />
        <StepTwo skip={true} />
        <StepThree />
        <StepFour />
      </UncontrolledFlow>

      <h1>ControlledFlow</h1>
      <ControlledFlow currentIndex={currentStepIndex} onNext={goNext}>
        <StepOne />
        <StepTwo skip={true} />
        <StepThree />
      </ControlledFlow>
    </>
  );
}

export default App;
