import React, { useState } from "react";

export const ControlledFlow = ({
  children,
  onDone,
  currentIndex,
  onNext,
}: any) => {
  const goNext = (dataFromStep: any) => {
    onNext(dataFromStep);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement<any>(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
  return currentChild;
};
