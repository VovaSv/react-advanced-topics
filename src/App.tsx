import { SplitScreen } from './components/split-screen';

const LeftSideComp = ({ title }: { title?: string }) => {
	return <h2 style={{ backgroundColor: 'green' }}>{`I am Left ${title}`}</h2>;
};

const RightSideComp = ({ title = '' }: { title?: string }) => {
	return <h2 style={{ backgroundColor: 'red' }}>{`I am Right ${title}`}</h2>;
};

function App() {
	return (
		// <SplitScreen
		// 	Left={LeftSideComp}
		// 	Right={RightSideComp}
		// 	leftWidth={1}
		// 	rightWidth={3}
		// />

		<SplitScreen leftWidth={1} rightWidth={3}>
			<LeftSideComp />
			<RightSideComp />
		</SplitScreen>
	);
}

export default App;
