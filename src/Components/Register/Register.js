import { useState } from "react";
import ShowData from "../ShowData/ShowData";
import "./Register.css";

// const AllData = []

function Register(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });
  const [allData, setAllData] = useState([]);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = [
      {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        contactNumber: state.contactNumber,
      },
    ];

    // console.log(userData);   
    setAllData([...allData, userData]);
    setState({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
    });
    // AllData.push(userData) ;
  };

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
                name="firstName"
                value={state.firstName}
                placeholder="Your name.."
                onChange={handleChange}
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
                name="lastName"
                value={state.lastName}
                placeholder="Your last name.."
                onChange={handleChange}
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
                value={state.email}
                name="email"
                placeholder="Your email addresss.."
                onChange={handleChange}
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
                name="contactNumber"
                value={state.contactNumber}
                placeholder="Your contact number.."
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <button onClick={submitHandler}>Submit</button>
          </div>
        </form>
      </div>
      {/* {console.log(allData)} */}
      <ShowData allData={allData} />
    </div>
  );
}

export default Register;
