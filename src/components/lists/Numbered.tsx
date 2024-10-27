import React from "react";
import { IListItem } from "../authors/LargeAuthorListItem";

export const NumberedList = ({
  items,
  sourceName,
  ItemComponent,
}: {
  items: any;
  sourceName: any;
  ItemComponent: React.ComponentType<IListItem>;
}) => {
  return (
    <>
      {items?.map((item: any, i: number) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [sourceName]: item }} />
        </>
      ))}
    </>
  );
};
