import LowerNav2 from "../HeaderContent/campaignHeaderContent";
import Cards from "../CardComponent/Cards";
import Footer from "../../commonComponent/Button";
import { Link } from "react-router-dom";
import image from "../../icons/page3.png"
const Page3 = () => {
  return (
    <>
      <LowerNav2
        heading="Your Ad Campaign"
        subheading="Launch your ad in just 4 easy steps"
        page={2}
      />
      <Cards heading="Choose the Product " subheading="(step 2 of 4)" line1="Bluberry cake with raw toppings" line2="Rs: 2,290" image={image} uncheck={true} tick2={true}/>
      <Link style={{ textDecoration: "none" }} to="/page4">
        <Footer />
      </Link>
    </>
  );
};

export default Page3;
