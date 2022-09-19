import { useState } from "react";
import "./App.scss";
import HelloWorldComponent from "./components/HelloWorldComponent";
import LoginPage from "./pages/LoginPage";
import ConditionPage from "./pages/ConditionPage";
import RegisterPage from "./pages/RegisterPage";
import PanelPage from "./pages/PanelPage/PanelPage";
import SideEffectPage from "./pages/SideEffect";
import RickMortyPage from "./pages/RickMortyPage/RickMortyPage";
import DisplayBtns from "./pages/RickMortyPage/DisplayBtns";

const App = () => {
  const [displayMode, setDisplayMode] = useState(true);

  const displayRickandMorty = () => {
    setDisplayMode(true);
  };
  const displayRegisterPage = () => {
    setDisplayMode(false);
  };

  return (
    <div className="container d-flex flex-column justify-content-center  my-5 p-2 border rounded">
      <DisplayBtns
        onDisplayRM={displayRickandMorty}
        onDisplayReg={displayRegisterPage}
      />
      {displayMode ? <RickMortyPage /> : <RegisterPage />}
      {/* <HelloWorldComponent /> */}
      {/* <RegisterPage />
      <LoginPage /> */}
      {/* <ConditionPage /> */}
      {/* <PanelPage /> */}
      {/* <button onClick={(ev) => setTf(!tf)}>toggle timer</button>
      {tf && <SideEffectPage />} */}
      {/* <RickMortyPage /> */}
    </div>
  );
};

export default App;
