import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData } from "../../Store/user/action";
import "./ShowData.css";

function ShowData(props) {
  // const [state, setState] = useState([]);

  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    const userID = e.target.id;
    console.log("ID : ", userID);
  };

  const counter = useSelector((state) => state.userData.userData);
  console.log("fsdffsdfsdfsf-----", counter);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

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
          {counter &&
            counter.map((user, id) => {
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
