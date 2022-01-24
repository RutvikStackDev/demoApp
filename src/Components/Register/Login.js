import { useState } from "react";
import ShowData from "../ShowData/ShowData";
import "./Login.css";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function fistNameChangeHandler(event) {
    setFirstName(event.target.value);
  }

  function lastNameChangeHandler(event) {
    setLastName(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-25">
              <label name="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                onChange={fistNameChangeHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label name="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                onChange={lastNameChangeHandler}
              />
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <ShowData fname={firstName} lname={lastName} />
    </div>
  );
}

export default Login;
