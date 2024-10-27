import { LargeAuthorListItem } from "./components/authors/LargeAuthorListItem";
import { SmallAuthorListItem } from "./components/authors/SmallAuthorListItem";
import { LargeBookListItem } from "./components/books/LargeBookListItem";
import { SmallBookListItem } from "./components/books/SmallBookListItem";
import { RegularList } from "./components/lists/Regular";
import { NumberedList } from "./components/lists/Numbered";
import { ListRenderer } from "./components/lists/List";
import { authors } from "./data/authors";
import { books } from "./data/books";

function App() {
  return (
    <>
      small author
      <hr />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      Large author
      <hr />
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
      Small book
      <hr />
      <RegularList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
      Large book
      <hr />
      <ListRenderer
        items={books}
        sourceName={"book"}
        size={"large"}
        isNumbered={true}
      />
    </>
  );
}

export default App;
