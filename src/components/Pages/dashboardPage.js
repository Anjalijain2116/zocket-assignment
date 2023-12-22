import SearchLine from "../CardComponent/SearchLine";
import on from "../../icons/On.png";
import facebook from "../../icons/facebook.png";
import LowerNav from "../HeaderContent/dashboardHeaderContent";
import edit from "../../icons/edit-2.png";
import trash from "../../icons/trash.png"
const Page1 = () => {
  const renderRow = () => (
    <div className="table_row">
      <div className="col1">
        <input type="checkbox" id="myCheckbox" name="myCheckbox" />
      </div>
      <div className="col2 ">
        <img className="col_on" src={on} />
      </div>
      <div className="col3">
        <img
          className="image"
          alt="not found"
          src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div>
          <div className="cap_name">Bluberry cake Campaign</div>
          <div className="created">Created on 14 july</div>
        </div>
      </div>
      <div className="col4">25 jul 2020 - 01 Aug 2020</div>
      <div className="col5">300</div>
      <div className="col6">INR.3,400</div>
      <div className="col7">Chennai</div>
      <div className="col8">
        <img className="col_facebook" src={facebook} />
      </div>
      <div className="col9">
        <div className="status_btn">Live Now</div>
      </div>
      <div className="col10">
           <img src={edit} />
           <img src={trash}/>
      </div>
    </div>
  );
  return (
    <div>
      <LowerNav />
      <div className="details">
        <SearchLine />

        <div className="head">
          <div className="col1">
            <input type="checkbox" id="myCheckbox" name="myCheckbox" />
          </div>
          <div className="col2">On/Off</div>
          <div className="col3">Campaign</div>
          <div className="col4">Date Range</div>
          <div className="col5">Clicks</div>
          <div className="col6">Budget</div>
          <div className="col7">Location</div>
          <div className="col8">Platform</div>
          <div className="col9">Status</div>
          <div className="col10">Actions</div>
        </div>

        {[...Array(5)].map((_, index) => (
          <div key={index}>{renderRow()}</div>
        ))}
      </div>
    </div>
  );
};
export default Page1;
