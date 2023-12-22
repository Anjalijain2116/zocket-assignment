import LowerNav from "../HeaderContent/dashboardHeaderContent";
import Footer from "../../commonComponent/Button"
import Page1 from "../Pages/dashboardPage";
import LowerNav2 from "../HeaderContent/campaignHeaderContent";
import Cards from "../CardComponent/Cards";
import Page2 from "../Pages/whatToDoPage"
import Page3 from "../Pages/productPage"
import Page4 from "../Pages/campaignSettingPage"
import Page5 from "../Pages/readyToGoPage"
// import card1 from "./style.js"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const Campaign=()=>{
    return (
        <div className="campaign">
            {/* <Page3 /> */}
            <RouterProvider router={approuter} />
        </div>
    );

}

const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Page1 />,
      // errorElement: <Error />,
    },
    {
      path: "/page2",
      element: <Page2 />,
      // errorElement: <Error />,
    },
    {
        path: "/page3",
        element: <Page3 />,
        // errorElement: <Error />,
      },
      {
        path: "/page4",
        element: <Page4 />,
        // errorElement: <Error />,
      },
      {
        path: "/page5",
        element: <Page5 />,
      },
  
   
  ]);
export default Campaign;

// UpperNav - TopFoldHeader
// cards, card1 = CardComponent
// page1 - dashboard /(if card available) dashboardCard
// page2 = whatToDoCard
// page3 - ProductCard
// page4 - CampaignSettingCard
// page5 - ReadyToGoCard

// common-components
// --> ProgressBar- SliderComponent

// Pageflow - ProgressComponent
// --> pageflow - progress.js

