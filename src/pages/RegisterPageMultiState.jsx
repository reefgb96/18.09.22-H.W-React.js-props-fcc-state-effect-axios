import { Fragment, useState } from "react";
const RegisterPageMultiState = () => {
  const [stateNameInput, setNameInput] = useState(""); //init state
  const [lastNameInput, setLastNameInput] = useState(""); //init state
  const [emailInput, setEmailInput] = useState(""); //init state
  const [passwordInput, setPasswordInput] = useState(""); //init state
  const handleNameInputChange = (ev) => {
    //this function made for the onChange event
    //!stateNameInput = ev.target.value;//dont do this ever!!!!!!!!!!!!!!
    setNameInput(ev.target.value); //change the value of the state
  };
  const handleLastNameInputChange = (ev) => {
    setLastNameInput(ev.target.value);
  };
  const handleEmailInputChange = (ev) => {
    setEmailInput(ev.target.value);
  };
  const handlePasswordInputChange = (ev) => {
    setPasswordInput(ev.target.value);
  };
  return (
    <Fragment>
      <h2>Register page</h2>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="Name"
          value={stateNameInput}
          onChange={handleNameInputChange}
        />
        <label htmlFor="nameInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="lastNameInput"
          placeholder="Lastname"
          value={lastNameInput}
          onChange={(ev) => {
            setLastNameInput(ev.target.value);
          }}
        />
        <label htmlFor="lastNameInput">Lastname</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={emailInput}
          onChange={handleEmailInputChange}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating  mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={passwordInput}
          onChange={handlePasswordInputChange}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="btn btn-primary">Register</button>
    </Fragment>
  );
};

export default RegisterPageMultiState;
