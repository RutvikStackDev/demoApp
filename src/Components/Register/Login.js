import { useState } from "react";
import ShowData from "../ShowData/ShowData";
import "./Login.css";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  function fistNameChangeHandler(event) {
    setFirstName(event.target.value);
  }

  function lastNameChangeHandler(event) {
    setLastName(event.target.value);
  }

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function contactChangeHandler(event) {
    setContactNumber(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(contactNumber);
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-45">
              <label name="fname">First Name</label>
            </div>
            <div className="col-55">
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
            <div className="col-45">
              <label name="lname">Last Name</label>
            </div>
            <div className="col-55">
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
            <div className="col-45">
              <label name="email">Email Address</label>
            </div>
            <div className="col-55">
              <input
                type="mail"
                id="email"
                name="mail"
                placeholder="Your email addresss.."
                onChange={emailChangeHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-45">
              <label name="fname">Contact Number</label>
            </div>
            <div className="col-55">
              <input
                type="number"
                id="contact"
                name="cnumber"
                placeholder="Your contact number.."
                onChange={contactChangeHandler}
              />
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
      <ShowData fname={firstName} lname={lastName} mail={email} conNumber={contactNumber} />
    </div>
  );
}

export default Login;
