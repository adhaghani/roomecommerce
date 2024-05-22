import React from "react";

import "./Outlet.css";
import Navigation from "../../../Component/Navigation/Navigation";
import Footer from "../../../Component/Footer/Footer";

import "../Home.css";

const Outlet = () => {
  return (
    <div className="Outlet" id="Outlet">
      <Navigation isOnHomePage={true} />
      <div className="Home-Container" id="Outlet-Container">
        <div className="section">
          <div className="section-title">
            <h1>About Our Outlet</h1>
          </div>
          <div className="section-details">
            <p>
              Unfortunately, since Room Furniture Inc. is founded recently, we
              have yet to have our own Physical Store. As of right now, all of
              ours sales are 100% online. However, we are committed to bring the
              best of our customer and we ensure that in the future we would
              establish our very first physical store near Klang Valley. We
              would like to thank to all of our customer for their unwavering
              support towards our product and towards eco-friendly earth.
            </p>
            <p>
              We aim by 2030, we would have our very first physical store, in
              which customer could walk-in and bought our furniture without
              waiting for the product shipment. We are committed to provide the
              best shopping experience towards our customer. And most
              importantly, here at Room Furniture Inc. we are committed to
              contribute toward a cleaner, greener earth, for the benefits of
              our future generations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Outlet;
