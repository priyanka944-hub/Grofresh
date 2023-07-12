import "./App.css";
import SideBar from "./Navigation_page/navigation_bar/side_bar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Navigation_page/Pages/dashboard";

import AllOrder from "./Navigation_page/Pages/Orders/All";
import Cancelled from "./Navigation_page/Pages/Orders/cancelled";
import ConfirmedOrders from "./Navigation_page/Pages/Orders/confirmed";
import DeliveredOrders from "./Navigation_page/Pages/Orders/delivered";
import FailedOrders from "./Navigation_page/Pages/Orders/failedd";
import OutforDelivery from "./Navigation_page/Pages/Orders/out_for_delivery";
import PendingOrders from "./Navigation_page/Pages/Orders/pending";
import ReturedOrders from "./Navigation_page/Pages/Orders/returned";
import PosOrders from "./Navigation_page/Pages/POS/orders";
import SubscribedEmails from "./Navigation_page/Pages/User_Management/subscribed_mail";
import SubCategories from "./Navigation_page/Pages/Catergory_Setup/sub_categories";
import ProductReviews from "./Navigation_page/Pages/User_Management/product_review";
import NewJoiningRequest from "./Navigation_page/Pages/User_Management/Deliveryman/new_joining";

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <>
      <Router>
        <SideBar
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : " "}`}>
          <Routes>
            <Route exact path={"/"} element={<Dashboard />} />

            {/* POS */}

            <Route path={"/pos-orders"} element={<PosOrders />} />

            {/* Orders */}
            <Route path={"/Oders-all"} element={<AllOrder />} />
            <Route path={"/Oders-cancelled"} element={<Cancelled />} />
            <Route path={"/Oders-confirmed"} element={<ConfirmedOrders />} />
            <Route path={"/Oders-Delivered"} element={<DeliveredOrders />} />
            <Route path={"/Oders-failed"} element={<FailedOrders />} />
            <Route
              path={"/Oders-out-for-delivery"}
              element={<OutforDelivery />}
            />
            <Route path={"/Oders-pending"} element={<PendingOrders />} />
            <Route path={"/Oders-returned"} element={<ReturedOrders />} />

            {/* Categories */}

            <Route
              path={"/catergory-setup-sub-categories"}
              element={<SubCategories />}
            />

            {/* Delivery Man */}
            <Route
              path="/delivery-man-new-joinig-request"
              element={<NewJoiningRequest />}
            />

            {/* User Management */}
            <Route path={"/subcribed-emails"} element={<SubscribedEmails />} />
            <Route path={"/product-reviews"} element={<ProductReviews />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
