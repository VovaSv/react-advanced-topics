import { UserLoaderChildrenMap } from "./components/user-loader-container-children-map";
import { UserInfo } from "./components/user-info";
import { UserLoaderRenderProps } from "./components/user-loader-container-render-props";
import { UserLoaderByIdChildrenMap } from "./components/user-loader-by-idcontainer-children-map";
import { GenericLoaderContainerChildrenMap } from "./components/generic-loader-container-children-map";
import { DataSourceContainer } from "./components/data-source-container";
import axios from "axios";

const getDataFromServer = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

function App() {
  return (
    <>
      <h1>Container Children Map</h1>
      <hr />
      <UserLoaderChildrenMap>
        <UserInfo />
      </UserLoaderChildrenMap>
      <br />
      <h1>Generic Loader Children Map</h1>
      <hr />
      <GenericLoaderContainerChildrenMap
        resourceUrl={"/api/users/3"}
        resourceName={"user"}
      >
        <UserInfo />
      </GenericLoaderContainerChildrenMap>
      <br />
      <h1>Container By Id Children Map</h1>
      <hr />
      <UserLoaderByIdChildrenMap userId={2}>
        <UserInfo />
      </UserLoaderByIdChildrenMap>
      <br />
      <h1>Render Props</h1>
      <hr />
      <UserLoaderRenderProps
        render={(extraProps: any) => <UserInfo {...extraProps} />}
      />
      <br />
      <h1>Data Source</h1>
      <hr />
      <DataSourceContainer
        getData={async () => getDataFromServer("/api/users/1")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSourceContainer>
    </>
  );
}

export default App;
