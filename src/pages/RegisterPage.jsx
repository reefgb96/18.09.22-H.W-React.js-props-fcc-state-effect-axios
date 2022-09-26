import { Fragment, useState } from "react";
import axios from "axios";
import Joi from "joi-browser";
import validate from "../components/validation/validation";
import loginSchema from "../components/validation/register.validation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerActions } from "./store-HW/register";
import { useSelector } from "react-redux";

const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    nameInput: "",
    emailInput: "",
    passwordInput: "",
    bizInput: false,
  });
  const dispatch = useDispatch();

  const handleUserInputChange = (ev) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput));
    if (newUserInput.hasOwnProperty(ev.target.id)) {
      newUserInput[ev.target.id] = ev.target.value;
      setUserInput(newUserInput);
    }
  };

  const handleCheckBoxInputChange = (ev) => {
    // console.log("ev", ev);
    let newUserInput = JSON.parse(JSON.stringify(userInput));
    if (newUserInput.hasOwnProperty(ev.target.id)) {
      newUserInput[ev.target.id] = ev.target.checked;
      setUserInput(newUserInput);
    }
  };

  const handleSubmitRegister = (ev) => {
    ev.preventDefault();
    axios
      .post("/users/register", {
        name: userInput.nameInput,
        email: userInput.emailInput,
        password: userInput.passwordInput,
      })
      .then((res) => {
        console.log("res", res);
        dispatch(registerActions.register());
        setUserInput({
          nameInput: "",
          emailInput: "",
          passwordInput: "",
          bizInput: false,
        });
        toast(`🦄 Thanks for registering ${res.data.name}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        ev.preventDefault();
        console.log("err from axios", err);
        const { error } = validate(userInput, loginSchema);
        if (error) {
          console.log({ error });
          let errorMsgs = `\n`;
          for (let errorItem of error.details) {
            switch (errorItem.type) {
              case "string.min":
                errorMsgs += `***${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
                break;
              case "string.max":
                errorMsgs += `***${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
                break;
              case "string.empty":
                errorMsgs += `***${errorItem.context.label} length must be at least ${errorItem.context.limit} characters long, `;
                break;
              // default:
              //   errorMsgs += "***something went wrong,";
              //   break;
            }
          }
          toast.warn(errorMsgs, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
      });
  };
  // const reg = useSelector((state) => state.registration.register);

  return (
    <form
      className="d-flex flex-column align-items-center"
      onSubmit={handleSubmitRegister}
    >
      <h2>Register page</h2>
      <div className="form-floating mb-3 w-75">
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="Name"
          value={userInput.nameInput}
          onChange={handleUserInputChange}
        />
        <label htmlFor="nameInput">Name</label>
      </div>
      <div className="form-floating mb-3 w-75">
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
          value={userInput.emailInput}
          onChange={handleUserInputChange}
        />
        <label htmlFor="emailInput">Email address</label>
      </div>
      <div className="form-floating  mb-3 w-75">
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Password"
          value={userInput.passwordInput}
          onChange={handleUserInputChange}
        />
        <label htmlFor="passwordInput">Password</label>
      </div>
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="bizInput"
          checked={userInput.bizInput}
          onChange={handleCheckBoxInputChange}
        />
        <label className="form-check-label" htmlFor="bizInput">
          Are you business
        </label>
      </div>

      <button className="btn btn-primary">Register</button>
    </form>
  );
};
export default RegisterPage;
