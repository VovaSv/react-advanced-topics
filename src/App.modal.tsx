import { Modal } from "./components/Modal";
import { SmallBookListItem } from "./components/books/SmallBookListItem";
import { RegularList } from "./components/lists/Regular";
import { books } from "./data/books";

function App() {
  return (
    <>
      <Modal>
        <RegularList
          items={books}
          sourceName={"book"}
          ItemComponent={SmallBookListItem}
        />
      </Modal>
    </>
  );
}

export default App;
