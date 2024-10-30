import React, { useState } from "react";

export const UncontrolledFlow = ({ children, onDone }: any) => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (currentStepData: any) => {
    const nextStepIndex = currentStepIndex + 1;
    const newData = {
      ...data,
      ...currentStepData,
    };
    if (nextStepIndex < children.length) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      console.log("we finished the flow: ", newData);
      onDone(newData);
    }
    setData(newData);
  };
  const currentChild = React.Children.toArray(children)[currentStepIndex];
  if (React.isValidElement<{ goNext: any; skip: boolean }>(currentChild)) {
    if (currentChild.props.skip) {
      const newData = {
        ...data,
        [`step ${currentStepIndex + 1}`]: "Skipped",
      };
      setCurrentStepIndex(currentStepIndex + 1);
      setData(newData);
      return null;
    }
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};
