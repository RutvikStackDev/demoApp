import { useState } from "react";
import ShowData from "../ShowData/ShowData";
import "./Register.css";
import TextField from "@material-ui/core/TextField";

function Register() {
  let [count, setCount] = useState(0);
  const [state, setState] = useState({
    data: [
      {
        id: " ",
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        product: "",
      },
    ],
  });

  const [allData, setAllData] = useState([]);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addQuantity = (e) => {
    setCount(count + 1);
  };

  const removeQunatity = (e) => {
    setCount(count - 1);
  };

  const clearTextField = () => {
    setState({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      product: "",
    });
    setCount(0);
  };

  const removeData = (id) => {
    console.log("Data removed at ID :", id);
    // const newState = state.data?.filter((userID) => id !== userID.id);
    const newState = state.data?.filter((userID) => {return console.log(userID.id);});
    // setState({data:state.data.filter(user => user.id !== id)})
    console.log("newState", newState);
  };

  // console.log(addedQunatity);

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = [
      {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        contact: state.contact,
        product: state.product,
        quantity: count,
      },
    ];

    setAllData([...allData, userData]);
    setState({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      product: "",
      quantity: 0,
    });
    setCount(0);
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="row-main">
            <div className="col-45">
              <label name="fname">First Name</label>
            </div>
            <div className="col-55">
              <TextField
                id="standard-basic"
                type="text"
                // id="fname"
                name="firstName"
                value={state.firstName}
                placeholder="Your name.."
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row-main">
            <div className="col-45">
              <label name="lname">Last Name</label>
            </div>
            <div className="col-55">
              <TextField
                id="standard-basic"
                type="text"
                // id="lname"
                name="lastName"
                value={state.lastName}
                placeholder="Your last name.."
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row-main">
            <div className="col-45">
              <label name="email">Email Address</label>
            </div>
            <div className="col-55">
              <TextField
                id="standard-basic"
                type="text"
                // id="email"
                value={state.email}
                name="email"
                placeholder="Your email addresss.."
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row-main">
            <div className="col-45">
              <label name="email">Contact Number</label>
            </div>
            <div className="col-55">
              <TextField
                id="standard-basic"
                type="number"
                // id="email"
                value={state.contact}
                name="contact"
                placeholder="Your contact number.."
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row-main">
            <div className="col-45">
              <label name="pname">Product Name</label>
            </div>
            <div className="col-55">
              <TextField
                id="standard-basic"
                type="text"
                // id="contact"
                name="product"
                value={state.product}
                placeholder="Puchased product.."
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row-main">
            <div className="col-45">
              <label name="qty">Quantity</label>
            </div>
            <div className="col-55">
              <TextField
                id="standard-basic"
                type="number"
                // id="contact"
                name="quantity"
                value={count || 0}
                placeholder="Quantity of product.."
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              onClick={addQuantity}
              className="add-btn"
              disabled={count === 10 ? true : false}
            >
              +
            </button>
            <button
              type="button"
              onClick={removeQunatity}
              className="minus-btn"
              disabled={count === 0}
            >
              -
            </button>
          </div>
          <div className="row-main">
            <button
              className="submit-btn"
              onClick={submitHandler}
              disabled={
                count === 0
                // state.firstName === "" ||
                // state.lastName === "" ||
                // state.email === "" ||
                // state.contact === "" ||
                // state.product === ""
              }
            >
              Submit
            </button>
            <button type="button" onClick={clearTextField} className="clr-btn">
              Clear
            </button>
          </div>
        </form>
      </div>
      {/* {console.log(allData)} */}
      <ShowData allData={allData} onDelete={removeData} />
    </div>
  );
}

export default Register;
