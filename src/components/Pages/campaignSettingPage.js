import { Link } from "react-router-dom";
import LowerNav2 from "../HeaderContent/campaignHeaderContent"
import Cards from "../CardComponent/campaignSettingCard"
const Page4 =()=>{
    return (
        <>
           <LowerNav2 heading="Your Ad Campaign" subheading="Launch your ad in just 4 easy steps" page={3}/>
           <div className="page4"> 
                <Cards heading="Campaign Settings " subheading="(Step 3 of 4)"/>
                
                
                
                
                <Link className="page4_btn" style={{textDecoration:"none"}} to="/page5">
                   <button className="footer_btn">Continue</button>
                </Link>
               
            </div>
          
        </>
    )
}

export default Page4;