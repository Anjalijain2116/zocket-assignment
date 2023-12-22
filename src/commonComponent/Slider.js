import React, {useState, useSyncExternalStore} from "react"
import ReactSlider from "react-slider";


const Slider = (props) => {
    const [value, setValue] = useState(props.defaultValue);
    const text= props.text

  return (
    <ReactSlider
      min={props.min}
      max={props.max}
      defaultValue={value}
      className="horizontal-slider"
      thumbClassName="thumb"
      trackClassName="track"
      onChange={(value)=> setValue(value)}
      renderThumb={(props, state) => (
        <div
          {...props}
          style={{ ...props.style, zIndex: 20 }}
          className="thumb-tracker"
        >
          <div className="thumb-tracker-text">
            {text==='Rs.' && `Rs. `}{value}{text==='km' && ` km`}
          </div>
          <div className="thumb-circle" />
        </div>
      )}
    />
  );
};
export default Slider;
