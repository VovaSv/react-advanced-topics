import React from "react";
import { IListItem } from "../authors/LargeAuthorListItem";

export const SmallBookListItem: React.FC<IListItem> = ({ book }) => {
  const { name, price } = book;

  return (
    <h2>
      {name}/{price}
    </h2>
  );
};
