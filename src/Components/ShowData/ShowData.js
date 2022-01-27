import "./ShowData.css";

function ShowData(props) {
  return (
    <div className="data-container">
      <table>
        <thead className="row heading">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Lastr Name</th>
            <th>Email Address</th>
            <th>Contact Number</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className="detail">
          {props?.allData?.map((user, id) => (
            <>
              {user?.map((data) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                  <td>{data.product}</td>
                  <td>{data.quantity}</td>
                  <td>
                    <button onClick={()=> props.onDelete(id)} id={id}>Delete</button>
                  </td>
                </tr>
              ))}
              {/* {console.log(index)} */}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowData;
