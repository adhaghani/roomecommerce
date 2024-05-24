import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// import IconButton from "../IconButton/IconButton";
import Button from "../Button/Button";

import "./Navigation.css";
const Navigation = (props) => {
  const [IsActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!IsActive);
  };

  const [isSideNavVisible, setIsSideNavVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 910) {
        setIsSideNavVisible(false);
      } else {
        setIsSideNavVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { UserID } = useParams();

  return (
    <>
      <div
        className={props.isOnHomePage ? "Navigation HomePage" : "Navigation"}
        id="Navigation"
      >
        <div className="Container">
          <div className="List">
            <div className="logo">
              <svg
                width="100"
                height="30"
                viewBox="0 0 123 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H12.3836C14.862 0.16335 17.4587 0.447803 19.5991 1.82501C21.948 3.21066 23.5026 5.7454 23.8547 8.43222C24.2039 11.0514 23.8885 13.9298 22.2662 16.1012C21.4213 17.301 20.2159 18.1853 18.9345 18.8725C20.9087 22.6014 22.976 26.2824 24.9728 30C22.0353 29.9887 19.095 30 16.1575 29.9944C14.4029 26.7077 12.6793 23.4069 10.8994 20.1371C9.96714 20.1371 9.03211 20.1371 8.09707 20.1399C8.09425 23.4238 8.09989 26.7077 8.09425 29.9916C5.39617 29.9972 2.69808 29.9944 0 29.9944V0ZM8.09144 6.5875C8.1027 9.00113 8.09144 11.4148 8.09989 13.8312C9.96151 13.7664 11.9217 14.0875 13.696 13.3693C16.2561 12.3104 16.1237 7.97315 13.5355 7.02403C11.7978 6.37627 9.90518 6.63819 8.09144 6.5875Z"
                  fill="#121212"
                />
                <path
                  d="M88.3174 0H97.7579C97.9213 0.0591438 98.2451 0.174615 98.4085 0.233759C100.355 4.92583 102.267 9.63199 104.205 14.3297C104.621 15.307 104.931 16.3462 105.554 17.2221C107.545 12.5526 109.421 7.83515 111.361 3.14589C111.814 2.09256 112.169 0.991363 112.758 0H122.795V29.9606C120.12 30.0338 117.444 29.9775 114.772 29.9944C114.724 24.1729 114.85 18.3458 114.707 12.5272C114.487 12.9553 114.273 13.389 114.09 13.8368C112.034 19.1457 109.953 24.4433 107.883 29.7465C106.286 29.7493 104.689 29.7465 103.092 29.7493C101.033 24.4179 98.9521 19.095 96.8989 13.7608C96.7159 13.3045 96.5103 12.8567 96.2962 12.4118C96.1075 18.267 96.2709 24.1335 96.2117 29.9944C93.5728 29.9944 90.9338 29.9972 88.2977 29.9944C88.3062 19.9962 88.2667 9.99812 88.3174 0Z"
                  fill="#121212"
                />
                <path
                  d="M59.1646 7.33959C61.7979 3.49524 66.3013 1.01402 70.9596 0.850668C74.3449 0.684502 77.7752 1.69558 80.5184 3.68676C85.0105 6.83264 87.5001 12.5555 86.7651 17.9883C84.2585 17.9883 81.7519 17.9911 79.2482 17.9883C79.5608 15.5409 78.6342 12.9921 76.8092 11.3332C75.4348 10.1475 73.6689 9.35893 71.8327 9.35611C69.5683 9.28289 67.2927 10.2911 65.8338 12.0289C64.4031 13.6285 63.7835 15.8676 64.0398 17.9855C61.5304 17.9939 59.0238 17.9883 56.5172 17.9883C56.0751 14.2763 56.9819 10.3897 59.1646 7.33959Z"
                  fill="#121212"
                />
                <path
                  d="M25.085 12.5357C27.5915 12.5244 30.0981 12.5413 32.6047 12.5244C31.9457 16.887 35.7759 21.427 40.2708 21.0327C44.7179 21.3622 48.4806 16.856 47.8187 12.5413C50.3253 12.5216 52.829 12.5385 55.3356 12.5329C55.7947 16.2195 54.8766 20.0779 52.7248 23.114C50.0296 27.0682 45.3488 29.5719 40.5666 29.6451C36.9954 29.7522 33.4045 28.5299 30.6389 26.2711C26.5776 23.0548 24.4372 17.6643 25.085 12.5357Z"
                  fill="#121212"
                />
              </svg>
            </div>
            {!props.isOnHomePage && (
              <ul className="link">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to={`/Product/${UserID}`}>Furniture</Link>
                </li>
              </ul>
            )}
            {props.sisOnHomePage && (
              <ul className="link">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="/#About">About Us</a>
                </li>
                <li>
                  <Link to="/Outlet">Outlet</Link>
                </li>
              </ul>
            )}
          </div>
          {!props.isOnHomePage && (
            <div className="Search">
              <input type="text" placeholder="Search" />
            </div>
          )}

          <div className="Cart-User">
            {props.isOnHomePage && (
              <Button
                title="Login"
                type={"Login"}
                link="/Login"
                className={"fill primary short"}
                value={"Sign in"}
              />
            )}
            {!props.isOnHomePage && (
              <div className="Cart">
                <Link to={`/Cart/${UserID}`}>
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            )}

            {!props.isOnHomePage && (
              <div className="User">
                <Link to={`/User/${UserID}`}>
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.02958 19.4012C5.97501 19.9508 6.3763 20.4405 6.92589 20.4951C7.47547 20.5497 7.96523 20.1484 8.01979 19.5988L6.02958 19.4012ZM15.9802 19.5988C16.0348 20.1484 16.5245 20.5497 17.0741 20.4951C17.6237 20.4405 18.025 19.9508 17.9704 19.4012L15.9802 19.5988ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM13 10C13 10.5523 12.5523 11 12 11V13C13.6569 13 15 11.6569 15 10H13ZM12 11C11.4477 11 11 10.5523 11 10H9C9 11.6569 10.3431 13 12 13V11ZM11 10C11 9.44772 11.4477 9 12 9V7C10.3431 7 9 8.34315 9 10H11ZM12 9C12.5523 9 13 9.44772 13 10H15C15 8.34315 13.6569 7 12 7V9ZM8.01979 19.5988C8.22038 17.5785 9.92646 16 12 16V14C8.88819 14 6.33072 16.3681 6.02958 19.4012L8.01979 19.5988ZM12 16C14.0735 16 15.7796 17.5785 15.9802 19.5988L17.9704 19.4012C17.6693 16.3681 15.1118 14 12 14V16Z"
                      fill="#000000"
                    />
                  </svg>
                </Link>
              </div>
            )}

            <button
              className={IsActive ? "hamburger active" : "hamburger"}
              id="hamburger"
              onClick={handleButtonClick}
            >
              <div className="top"></div>
              <div className="mid"></div>
              <div className="bot"></div>
            </button>
          </div>
        </div>
      </div>
      {isSideNavVisible && (
        <div
          className={IsActive ? "SideNavigation active" : "SideNavigation"}
          id="SideNavigation"
        >
          {!props.isOnHomePage && (
            <div className="Search">
              <input type="text" placeholder="Search" />
            </div>
          )}
          {!props.isOnHomePage && (
            <ul className="link">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Product">Furniture</Link>
              </li>
            </ul>
          )}
          {props.isOnHomePage && (
            <ul className="link">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#About">About Us</a>
              </li>
              <li>
                <Link to="/Sales">Outlet</Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Navigation;
