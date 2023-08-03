import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useSelector } from "react-redux";
import { RootStore } from "./store/Store";
import { GetTest } from "./store/actions/TestAction";
import { useAppDispatch } from "./store/Hooks";

function App() {
  const [count, setCount] = useState(0);

  const dispatch = useAppDispatch();
  const testState = useSelector((state: RootStore) => state.test);

  useEffect(() => {
    dispatch(GetTest() as any);
    console.log(testState.tests);
  }, [dispatch]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {testState.tests && testState.tests.length > 0 ? (
        <ul>
          {testState.tests.map((value, index) => {
            return (
              <li>
                <p>
                  name :
                  {value.title}
                </p>
                index : {index}
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>Belum ada</h1>
      )}
    </>
  );
}

export default App;
