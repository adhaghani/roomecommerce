import React from "react";
import FrequentlyAsked from "./FrequentlyAsked";

import "./FAQ.css";
import Title from "../../../Component/Title/Title";
const FAQMain = () => {
  return (
    <div className="section">
      <Title Title="FAQ" SubTitle="Frequently Asked Question" />
      <div className="section-details faq">
        <FrequentlyAsked
          question="How long is the delivery time?"
          answer="Our delivery time is usually 5-10 days depending on the quantity of products ordered. We do have 20-days delivery guaranteed policy where products are guaranteed to be delivered within 20 days of the orders being made."
        />
        <FrequentlyAsked
          question="Does the proudct have any warranty?"
          answer="Yes! Our product have 100-days warranty, any damage during delivery or defect upon inspection, we will guarantee to replace that product or provide full refund to the customer, Depending on which customer want."
        />
      </div>
    </div>
  );
};

export default FAQMain;
