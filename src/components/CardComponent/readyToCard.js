import icon from "../../icons/page5_icon.png";
import image from "../../icons/page5_img.png";
import like from "../../icons/like_button.png";
import tick from "../../icons/tick-circle.png";
const Cards = () => {
  return (
    <>
      <span className="cards_head">Ready to go </span>
      <span className="cards_head2">(Step 4 of 4)</span>
      <div className="card_border"></div>

      <div className="page5_cards">
        <div className="page5_card">
          <div className="tick_icon">
            <img src={tick} />
          </div>

          <div className="page5card_head">
            <div>
              <img className="page5_icon" src={icon} />
            </div>

            <div>
              <div className="shop_name">Mukund Cake Shop</div>
              <div className="sponsored">Sponsored</div>
            </div>
          </div>
          <div className="page5_card_content">
            We are the best bakery around you. Please like my page to get
            updates on exciting offers and discounts
          </div>
          <img className="page5_image" src={image} />
          <div className="shop_like">
            <div className="shop_like_name">Mukund cake shop</div>
            <img className="like_btn" src={like} />
          </div>

          <div className="page5_btns">
            <div className="page5_card_btn">Change Image</div>
            <div className="page5_card_btn">Edit text</div>
          </div>
        </div>
        <div className="page5_card page_card1">
          <div className="page5card_head">
            <img className="page5_icon" src={icon} />
            <div>
              <div className="shop_name">Mukund Cake Shop</div>
              <div className="sponsored">Sponsored</div>
            </div>
          </div>
          <div className="page5_card_content">
            We are the best bakery around you. Please like my page to get
            updates on exciting offers and discounts
          </div>
          <img className="page5_image" src={image} />
          <div className="shop_like">
            <div className="shop_like_name">Mukund cake shop</div>
            <img className="like_btn" src={like} />
          </div>
        </div>
        <div className="page5_card page_card1">
          {" "}
          <div className="page5card_head">
            <img className="page5_icon" src={icon} />
            <div>
              <div className="shop_name">Mukund Cake Shop</div>
              <div className="sponsored">Sponsored</div>
            </div>
          </div>
          <div className="page5_card_content">
            We are the best bakery around you. Please like my page to get
            updates on exciting offers and discounts
          </div>
          <img className="page5_image" src={image} />
          <div className="shop_like">
            <div className="shop_like_name">Mukund cake shop</div>
            <img className="like_btn" src={like} />
          </div>
        </div>
        <div className="page5_card page_card1">
          <div className="page5card_head">
            <img className="page5_icon" src={icon} />
            <div>
              <div className="shop_name">Mukund Cake Shop</div>
              <div className="sponsored">Sponsored</div>
            </div>
          </div>
          <div className="page5_card_content">
            We are the best bakery around you. Please like my page to get
            updates on exciting offers and discounts
          </div>
          <img className="page5_image" src={image} />
          <div className="shop_like">
            <div className="shop_like_name">Mukund cake shop</div>
            <img className="like_btn" src={like} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
