import "./ShowData.css";

function ShowData(props) {
  return (
    <div>
      <div className="row">
        <div className="col-25">
          <label name="fanme">Firstname</label>
        </div>
        <div className="col-75">{props.fname}</div>
      </div>
      <div className="row">
        <div className="col-25">
          <label name="lname">Last Name</label>
        </div>
        <div className="col-75">{props.lname}</div>
      </div>
    </div>
  );
}

export default ShowData;
