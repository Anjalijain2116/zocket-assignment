import { SlCallIn } from "react-icons/sl";
import tick from "../../icons/tick-circle.png";
import callreceive from "../../icons/call_receive.png";
import uncheckMark from "../../icons/tick-uncheck.png";
import checkMark from "../../icons/tick-circle.png"
const Card = (props) => {
  console.log(props.uncheck, "hii");
  return (
    <>
      {!props.tick1 && !props.tick2 && (
        <div className="card1">
          {/* <div className="card_icon"> */}
          <img src={props.image} />
          {/* </div> */}
          <div className="card_lines">
            <div className="card_line1">{props.line1}</div>
            <div className="card_line2">{props.line2}</div>
          </div>

          {props.uncheck && <img className="uncheck" src={uncheckMark} />}
        </div>
      )}

      {!props.tick1 && props.tick2 && (
        <div className="card1 tick_card3">
          {/* <div className="card_icon"> */}
          <img src={props.image} />
          {/* </div> */}
          <div className="card_lines">
            <div className="card_line1">{props.line1}</div>
            <div className="card_line2">{props.line2}</div>
          </div>

          {props.uncheck && <img className="uncheck" src={checkMark} />}
        </div>
      )}

      {props.tick1 && !props.tick2 && (
        <div className="card1 tick_card">
          {/* <div className="card_icon"> */}
          <div className="tick_icon1">
            <img src={tick} />
          </div>
          <img className="card_icon" src={props.image} />
          {/* </div> */}
          <div>
            <div className="card_line1">{props.line1}</div>
            <div className="card_line2">{props.line2}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
