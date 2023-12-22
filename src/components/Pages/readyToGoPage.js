import LowerNav2 from "../HeaderContent/campaignHeaderContent";
import Cards from "../CardComponent/readyToCard";
const Page5 = () => {
  return (
    <>
      <LowerNav2
        heading="Your Ad Campaign"
        subheading="Launch your ad in just 4 easy steps"
        page={4}
      />
      <div className="page5">
        <Cards />
      </div>
      <div className="page5_btn">Start campaign</div>
    </>
  );
};
export default Page5;
