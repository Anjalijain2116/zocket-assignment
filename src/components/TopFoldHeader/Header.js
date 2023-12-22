import buy from "../../icons/buy.png"
import gift from "../../icons/gift.png"
import ring from "../../icons/notification.png"
import shop from "../../icons/shop.png"
import dropdown from "../../icons/nav_dropdowm.png"
import group from "../../icons/Group 16633.png"
const UpperNav=()=>{
    return (
        <div className="uppernav">
            <div className="uppernav_items">Free trial ends in 2 days</div>

            <div className="uppernav_item">
                <img className="buy_icon" src={buy}/>
                <div>Buy Plan</div>
            </div>

            <img className="uppernav_items uppernav_icons" src={gift}/>
            <img className="uppernav_items uppernav_icons" src={ring}/>
            <div className="uppernav_item1">
                <img className="shop_icon" src={shop}/>
                <div>Mukund cake shop</div>
                <img className="uppernav_drop" src={dropdown}/>
                </div>
                <img className="uppernav_items uppernav_icons" src={group}/>
        </div>
    );
}

export default UpperNav;