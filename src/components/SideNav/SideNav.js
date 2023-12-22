import zocketicon from "../../icons/zocket_logo.png"
import house from "../../icons/house.png"
import voice from "../../icons/voice.png"
import product from "../../icons/product.png"
import customer from "../../icons/customer.png"
const SideNav =()=>{
      return (
        <div className="sidenav">
            <img className="dash_icon" src={zocketicon}/>
            

            <img className="dash_icons" src={house}/>
            <div className="icons_line">Home</div>


            <div className="camp_icon">
            <div className="rectangle"></div>
            <img className="dash_icons" src={voice}/>
            <div className="icons_line">Campaign</div>
            </div>

            <img className="dash_icons" src={product}/>
            <div className="icons_line">Products</div>

            <img className="dash_icons" src={customer}/>
            <div className="icons_line">Customers</div>
        </div>
      )
}
export default SideNav;