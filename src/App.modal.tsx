import { Modal } from './components/Modal';
import { ListRenderer } from './components/lists/List';
import { books } from './data/books';

function App() {
	return (
		<>
			Some data
			<Modal>
				<ListRenderer
					items={books}
					sourceName={'book'}
					size={'large'}
					isNumbered={true}
				/>
			</Modal>
		</>
	);
}

export default App;
