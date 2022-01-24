import "./ShowData.css";
// import Login from "../Register/Login";

function ShowData(props) {

  // function saveFormDataHandler(enteredExpenseData) {
  //   const formData = {
  //     ...enteredExpenseData
  //   };}
  return (
    <div>
      <div className="data-container">
        <div className="row">
          <div className="tag">
            <label name="fanme" className="label">
              Firstname
            </label>
          </div>
          <div className="detail">{props.fname}</div>
        </div>
        <div className="row">
          <div className="tag">
            <label name="lname" className="label">
              Last Name
            </label>
          </div>
          <div className="detail">{props.lname}</div>
        </div>
        <div className="row">
          <div className="tag">
            <label name="email" className="label">
              Email Address
            </label>
          </div>
          <div className="detail">{props.mail}</div>
        </div>
        <div className="row">
          <div className="tag">
            <label name="cNumber" className="label">
              Contact Number
            </label>
          </div>
          <div className="detail">{props.conNumber}</div>
        </div>
      </div>
      {/* <Login onSaveFormeData={saveFormDataHandler} /> */}
    </div>
  );
}

export default ShowData;
