import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.scss";
// import RandNumcontainer from "./pages/Redux/HW-22.09/container";
// import HelloWorldComponent from "./components/HelloWorldComponent";
import LoginPage from "./pages/LoginPage";
// import ConditionPage from "./pages/ConditionPage";
import RegisterPage from "./pages/RegisterPage";
// import PanelPage from "./pages/PanelPage/PanelPage";
// import SideEffectPage from "./pages/SideEffect";
// import RickMortyPage from "./pages/RickMortyPage/RickMortyPage";
// import DisplayBtns from "./pages/RickMortyPage/DisplayBtns";
import "react-toastify/dist/ReactToastify.css";
import NavBarComponent from "./components/NavBarComponent";
// import DisplayPage from "./store/TK/TK-22.09-Redux";
import DisplayLoginRegister from "./components/displayLoginRegister";
import { useSelector } from "react-redux";

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
      <ToastContainer />
      <NavBarComponent />
      <DisplayLoginRegister />
      {/* <RegisterPage />
      <LoginPage /> */}
      {/* <DisplayPage /> */}
      {/* <RandNumcontainer /> */}
      {/* <DisplayBtns
        onDisplayRM={displayRickandMorty}
        onDisplayReg={displayRegisterPage}
        />
      {displayMode ? <RickMortyPage /> : <RegisterPage />} */}
      {/* <HelloWorldComponent /> */}
      {/* <ConditionPage /> */}
      {/* <PanelPage /> */}
      {/* <button onClick={(ev) => setTf(!tf)}>toggle timer</button>
      {tf && <SideEffectPage />} */}
      {/* <RickMortyPage /> */}
    </div>
  );
};

export default App;
