
import "./ShowData.css";

function ShowData(props) {
  return (
    <div>
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
  );
}

export default ShowData;
