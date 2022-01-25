import "./ShowData.css";

function ShowData(props) {
  // console.log("props ", props.allData);
  return (
    <div>
      <div className="data-container">
          <div
            style={{ display: "flex", flexDirection: "row" }}
          >
            <label htmlFor="firstName">First Name</label>
            <label htmlFor="lastName">Last Name</label>
            <label htmlFor="mail">Email Address</label>
            <label htmlFor="number">Contact Number</label>
          </div>

        {props?.allData?.map((user) => (
          <>
            {user?.map((data) => (
              <div style={{ display: "flex", flexDirection: "row" }}>
                {/* <label htmlFor="firstName">firstName</label> */}
                <div className="row">
                  <div className="detail">{data.firstName || ""}</div>
                </div>
                <div className="row">
                  <div className="detail">{data.lastName || ""}</div>
                </div>
                <div className="row">
                  <div className="detail">{data.email || ""}</div>
                </div>
                <div className="row">
                  <div className="detail">{data.contactNumber || ""}</div>
                </div>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

export default ShowData;
