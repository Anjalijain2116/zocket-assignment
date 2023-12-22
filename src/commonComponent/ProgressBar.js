import lamp from "../icons/lamp-charge.png";
import bag from "../icons/bag.png";
import appointment from  "../icons/appointments.png";
import tickCircle from "../icons/tick-circle-pageflow.png"

const PageFlow = (props) => {
  const { page=0 } = props;
  const dynamicWidth = page * 15 + (page-1)*10;
  return (
    <div className="pageflow">
      <div className="progress-bar">
        <div className="progressBarStatic"></div>
        <div
          className="progressBarDynamic"
          style={{ width:`${dynamicWidth}%` }}
        ></div>
        <div className="step">
          <div className="circle">
            <img src={lamp} />
          </div>
          <div className="text">What you want to do</div>
        </div>
        {/* <div className="lineBreak"></div>
        <div className="lineActive"></div> */}
        <div className="step">
          <div className={page >= 2 ? "circle" : "inactiveCircle"}>
            <img src={bag} />
          </div>
          <div className="text">Choose product</div>
        </div>
        {/* <div className="line"></div> */}
        <div className="step">
          <div className={page >= 3 ? "circle" : "inactiveCircle"}>
            <img src={appointment} />
          </div>
          <div className="text">Campaign settings </div>
        </div>
        {/* <div className="line"></div> */}
        <div className="step">
          <div className={page >= 4 ? "circle" : "inactiveCircle"}>
            <img src={tickCircle} />
          </div>
          <div className="text">Ready to go</div>
        </div>
      </div>
    </div>
  );
};

export default PageFlow;