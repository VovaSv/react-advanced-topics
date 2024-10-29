
import { UserLoaderChildrenMap } from "./components/user-loader-container-children-map";
import { UserInfo } from "./components/user-info";
import { UserLoaderRenderProps } from "./components/user-loader-container-render-props";


function App() {
  return (
    <>
    <h1>Container Children Map</h1>
    <hr />
        <UserLoaderChildrenMap>
            <UserInfo />
        </UserLoaderChildrenMap>
       <h1>Render Props</h1>
       <hr />
        <UserLoaderRenderProps render={(extraProps: any) => <UserInfo {...extraProps} />} />
    </>
  );
}


export default App;
