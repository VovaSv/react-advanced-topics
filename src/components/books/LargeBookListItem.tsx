import React from "react";
import { IListItem } from "../authors/LargeAuthorListItem";

export const LargeBookListItem: React.FC<IListItem> = ({ book }) => {
  const { name, price, title, pages } = book;

  return (
    <>
      <p>{name}</p>
      <p>{price}</p>
      <p>Title: {title}</p>
      <p># of Pages: {pages}</p>
    </>
  );
};
