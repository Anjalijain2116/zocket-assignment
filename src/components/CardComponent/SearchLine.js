import dropdown from "../../icons/input_dropdown.png"
const SearchLine =()=>{
    return (
        <div className="searchline">
            <input className="search" placeholder="search for your campaign"/>
            <div className="platform">
                <div className="sub_platform">Platform:</div>
                <div className="sub_platform input1" >
                    <div>All platform</div>
                    <img src={dropdown} />
                </div>
                  
                <div className="sub_platform">Status:</div>
                <div className="sub_platform input1" >
                    <div>All Status</div>
                    <img src={dropdown} />
                </div>
                <div className="sub_platform input1" >
                    <div>Last 30 days</div>
                    <img src={dropdown} />

                </div>
            </div>
        </div>
    );
}
export default SearchLine;