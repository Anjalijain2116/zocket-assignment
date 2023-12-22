import Cards from "../CardComponent/Cards";
import Footer from "../../commonComponent/Button";
import LowerNav2 from "../HeaderContent/campaignHeaderContent";
import { Link } from "react-router-dom";
import image from "../../icons/call_receive.png"

const Page2 = () => {
  return (
    <>
      <LowerNav2
        heading="Your Ad Campaign"
        subheading="Launch your ad in just 4 easy steps"
        page={1}
      />
      <Cards heading="What you wnat to do? " subheading="(Step 1 of 4)" line1="Get Leads as calls" line2="Reach broad audience and get leads through calls" image={image} tick1={true}/>
      <Link style={{ textDecoration: "none"}} to="/page3">
        <Footer />
      </Link>
    </>
  );
};
export default Page2;
