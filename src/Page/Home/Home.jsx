import React from "react";

import "./Home.css";

import Footer from "../../Component/Footer/Footer";
import Navigation from "../../Component/Navigation/Navigation";
import Button from "../../Component/Button/Button";

const Home = () => {
  return (
    <div className="Home" id="Home">
      <Navigation isOnHomePage={true} />
      <div className="heading-container">
        <div className="heading">
          <div className="title">
            <h1>Hey,</h1>
            <h2>Welcome to Room!</h2>
            <Button
              title="Login"
              type="Login"
              link="/Login"
              className="fill primary Large"
              value="Sign in"
            />
          </div>
        </div>
      </div>

      <div className="Home-Container" id="About">
        <div className="section">
          <div className="section-title">
            <h1>About Us</h1>
          </div>
          <div className="section-details">
            <p>
              Room Furniture Inc., founded in 2020 by Mr. Wong Lee, emerged with
              a clear vision aimed at reshaping the furniture industry
              landscape. Driven by a passion for innovation, sustainability, and
              affordability, Room Furniture Inc. embarked on a journey to offer
              customers high-quality, stylish, and eco-conscious furniture
              solutions at accessible prices. With Mr. Wong Lee’s extensive
              background in furniture design, manufacturing, and retail, the
              company was well-equipped to bring this vision to fruition.
            </p>
            <p>
              Beginning as a humble local furniture workshop, Room Furniture
              Inc. swiftly garnered acclaim for its impeccable craftsmanship and
              meticulous attention to detail. What set the company apart was its
              unwavering commitment to incorporating eco-friendly materials into
              its manufacturing processes, even at the nascent stages of its
              operation. This commitment not only resonated with environmentally
              conscious consumers but also positioned Room Furniture Inc. as a
              trailblazer in sustainable furniture practices.
            </p>
            <p>
              As demand surged for Room Furniture Inc.'s products, the company
              responded by expanding its operations and bolstering its
              workforce. One pivotal step was the establishment of a dedicated
              design team, tasked with infusing modernity and functionality into
              each furniture piece. This strategic move allowed Room Furniture
              Inc. to stay ahead of trends, catering to the evolving preferences
              of today's discerning consumers.
            </p>
            <p>
              Beyond crafting aesthetically pleasing furniture, Room Furniture
              Inc. made customer satisfaction a top priority. Every interaction,
              from browsing through the product catalog to post-purchase
              support, was designed to enhance the overall customer experience.
              This customer-centric approach, coupled with a commitment to
              environmental responsibility, became ingrained in the company's
              ethos.
            </p>
            <p>
              Today, Room Furniture Inc. stands as a testament to Mr. Wong Lee’s
              vision and the collective effort of its team. With a portfolio of
              sustainable, stylish, and functional furniture solutions, the
              company continues to leave a lasting impact on the furniture
              industry, inspiring homes and workspaces while championing the
              principles of innovation, customer satisfaction, and environmental
              stewardship.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
