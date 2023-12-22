import calendar from "../../icons/calendar.png";
import flag from "../../icons/flag.png";
import dowm from "../../icons/arrow-down.png";
import ProgressBar from "../../commonComponent/Slider";
import gps from "../../icons/gps.png"
const Cards = (props) => {
  return (
    <div className="page4_card">
      <span className="cards_head">{props.heading}</span>
      <span className="cards_head2">{props.subheading}</span>
      <div className="card_border"></div>

      <div className="page4_cards">
        <div className="page4_circle">1</div>
        <div className="page4_cards_head">Budget and dates info</div>
      </div>

      <div className="page4_card_content">
        <div className="vertical_line"></div>
        <div className="budget_detail">
          <div className="timeline">Budget Timeline</div>

          <div className="budget_btn">
            <div className="lifetime_btn">Lifetime</div>
            <div className="daily_btn">Daily</div>
          </div>

          <div className="date_divs">
            <div>
              <div>Start date</div>
              <div className="date">
                <img className="calendar" src={calendar} />
              </div>
            </div>

            <div>
              <div>End date</div>
              <div className="date">
                <img className="calendar" src={calendar} />
              </div>
            </div>
          </div>

          <div className="progress_head">
            <div>Enter campaign budget</div>
            <div className="flag_div">
              <img src={flag} />
              {/* <div></div> */}
              <div className="INR">INR</div>
              <img src={dowm} width={`15px`} />
            </div>
          </div>

          <ProgressBar
            min={100}
            max={100000}
            text={`Rs.`}
            defaultValue={20000}
          />
          <div className="progress_thumbnail">
            <div className="progress_min">100</div>
            <div className="progress_max">1,00,000</div>
          </div>
        </div>
      </div>

      <div className="page4_cards">
        <div className="page4_circle">2</div>
        <div className="page4_cards_head">Location info</div>
      </div>

      <div className="page4_card_content">
        {/* <div className="vertical_line"></div> */}
        <div className="budget_detail">
          <div className="timeline">Location type</div>

          <div className="budget_btn">
            <div className="lifetime_btn location_btn">Location</div>
            <div className="daily_btn radius_btn">Radius</div>
          </div>

          
          <div className="progress_head">
            <div>Select Location</div>
            </div>

          <div className="date_divs">
              <div className="select_location">
                <div>Select a place name, address or coordinates</div>
                <img src={gps} />
              </div>
          </div>

          <div className="progress_head">
          {/* <div>Enter campaign budget</div> */}
            <div>Select target radius</div>
          </div>

          <ProgressBar min={1} max={30} text={`km`} defaultValue={24} />
          <div className="progress_thumbnail">
            <div className="progress_min">1</div>
            <div className="progress_max">30</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
