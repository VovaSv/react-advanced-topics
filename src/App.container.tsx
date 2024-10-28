
import { CurrentUserLoader } from "./components/current-user-loader";
import { UserInfo } from "./components/user-info";


function App() {
  return (
    <>
    {'Container'}
        <CurrentUserLoader>
            <UserInfo />
        </CurrentUserLoader>
    </>
  );
}

export default App;
