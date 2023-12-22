import { Link } from "react-router-dom";
import add from "../../icons/add-circle.png";
const LowerNav = () => {
  return (
    <div className="lowernav">
      <div className="lowernav_head">
        <div className="your_campaign">Your Campaigns</div>
        <div className="check_list">
          Check the list of Campaigns you created
        </div>
      </div>
      <Link to="/page2" style={{ textDecoration: "none" }}>
        <button className="lowernav_btn">
          <img className="add_icon" src={add} />
          <div >Create new campaign</div>
        </button>
      </Link>
    </div>
  );
};
export default LowerNav;
