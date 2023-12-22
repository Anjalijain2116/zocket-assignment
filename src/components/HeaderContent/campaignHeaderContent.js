import PageFlow from "../../commonComponent/ProgressBar";

const LowerNav = (props) => {
  return (
    <>
      <div className="lowernav2">
        <div className="your_campaign">{props.heading}</div>
        <div className="check_list">
          {props.subheading}
        </div>
        <PageFlow page={props.page}/>
      </div>
    </>
  );
};
export default LowerNav;
