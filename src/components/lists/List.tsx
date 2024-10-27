import { LargeAuthorListItem } from "../authors/LargeAuthorListItem";
import { SmallAuthorListItem } from "../authors/SmallAuthorListItem";
import { LargeBookListItem } from "../books/LargeBookListItem";
import { SmallBookListItem } from "../books/SmallBookListItem";
import { NumberedList } from "./Numbered";
import { RegularList } from "./Regular";

const componentMap: any = {
  authors: {
    small: SmallAuthorListItem,
    large: LargeAuthorListItem,
  },
  book: {
    small: SmallBookListItem,
    large: LargeBookListItem,
  },
};

export function ListRenderer({ items, sourceName, size, isNumbered }: any) {
  const ListComponent = isNumbered ? NumberedList : RegularList;
  const component = componentMap?.[sourceName]?.[size];
  console.log(component);

  return (
    <ListComponent
      items={items}
      sourceName={sourceName}
      ItemComponent={component}
    />
  );
}
