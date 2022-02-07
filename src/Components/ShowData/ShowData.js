import { useEffect, useState } from "react";
import "./ShowData.css";

function ShowData(props) {
  const [state, setState] = useState([]);

  const deleteHandler = (e) => {
    const userID = e.target.id;
    console.log("ID : ", userID);

  };

  useEffect(() => {
    async function getapi() {
      const response = await fetch("http://localhost:3100/api/users");
      var data = await response.json();
      setState(data);
      // console.log("length :", state.length);
      // console.log("state :", state);
    }
    getapi();
  }, []);

  return (
    <div className="data-container">
      <table>
        <thead className="row-heading">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Contact Number</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className="detail">
          {state &&
            state.map((user, id) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>{user.product}</td>
                  <td>{user.quantity}</td>
                  <td>
                    {" "}
                    <button id={user._id} onClick={deleteHandler}>
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowData;
