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
import DeliveryManReviews from "./Navigation_page/Pages/User_Management/Deliveryman/delivery_man_reviews";
import CustomerSettings from "./Navigation_page/Pages/User_Management/customer_settings";
import Messages from "./Navigation_page/Pages/help&support/messages";
import Limitedstock from "./Navigation_page/Pages/Product_setup/limited_stocks";
import ThirdParty from "./Navigation_page/Pages/System_settings/third_party";
import PageSetup from "./Navigation_page/Pages/System_settings/pages&Media/page_setup";
import AddNewDeliveryMan from "./Navigation_page/Pages/User_Management/Deliveryman/add_new";
import Categories from './Navigation_page/Pages/Catergory_Setup/Categories';
import BulkExport from './Navigation_page/Pages/Product_setup/bulk_export';
import BulkImport from './Navigation_page/Pages/Product_setup/bult_import';
import LimitedStock from './Navigation_page/Pages/Product_setup/limited_stocks';
import ProductAttribute from './Navigation_page/Pages/Product_setup/product_att';
import ProductList from './Navigation_page/Pages/Product_setup/product_list';
import Banner from './Navigation_page/Pages/poromotiom managemnet/banner';
import Coupons from './Navigation_page/Pages/poromotiom managemnet/coupons';
import EmployeeRoleSetup from './Navigation_page/Pages/User_Management/employees/employee_role';

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
            {/* report analytics */}
            <Route path={"/report-analytics-earning-report"} element={<Earning/>}/>

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

            {/*Help & Support section*/}
            <Route path={"/messages"}element={<Messages/>}/>

            {/* Categories */}

          <Route path={'/catergory-setup-sub-categories'} element={<SubCategories/>}/>
            <Route path={'/catergory-setup-Categories'} element={<Categories/>}/>

            {/* Delivery Man */}
            <Route
              path="/delivery-man-new-joinig-request"
              element={<NewJoiningRequest />}
            />
            <Route 
            path="/delivery-man-delivery-man-reviews" element={<DeliveryManReviews/>} />
            <Route 
            path="/deliveryman-add-new-delivery-man" element={<AddNewDeliveryMan/>} />

            {/* {Promotion Management} */}
            <Route path={'banner'} element={<Banner/>}/>
            <Route path={'coupons'} element={<Coupons/>}/>

            {/* User Management */}
            <Route path={"/subcribed-emails"} element={<SubscribedEmails />} />
            <Route path={"/product-reviews"} element={<ProductReviews />} />
            <Route path={"/customer-settings"} element={<CustomerSettings/>}/>
            <Route path={'/user-management/employees-employee-role'} element={<EmployeeRoleSetup/>}/>

             {/* Product Management */}
             <Route path={'/product-setup-bulk-export'} element={<BulkExport/>}/>
              <Route path={'/product-setup-bulk-import'} element={<BulkImport/>}/>
              <Route path={'/product-setup-limited-stocks'} element={<LimitedStock/>}/>
              <Route path={'/product-setup-product-att'} element={<ProductAttribute/>}/>
              <Route path={'/product-setup-product-list'} element={<ProductList/>}/>

             {/* System Settings */}
             <Route path={"/third-party"} element={<ThirdParty/>}/>
             <Route path={"/pagesandmedia-page-setup"} element={<PageSetup/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
