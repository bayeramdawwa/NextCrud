import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "@/store";
import HomeNavbar from "@/components/Navs/HomeNavbar";
import HomeFooter from "@/components/Footers/HomeFooter";

export default function MainLayouts({ children }) {
  return (
  <>
   <Provider store={store}>
      <HomeNavbar />
     
      <div className="containerr">{children}</div>

      <HomeFooter />
    </Provider>
    </>
  );
}
