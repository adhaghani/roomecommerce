import React, { useEffect, useState } from "react";

import "./Order.css";

import ProductUserCard from "../Section/Purchase/UserProduct/ProductUserCard";
import Button from "../../../Component/Button/Button";
import { useLocation, useParams } from "react-router-dom";
const Order = (props) => {
  const [IsAdmin, setIsAdmin] = useState(false);

  const location = useLocation();
  function DetermineUser() {
    const pathname = location.pathname;
    if (pathname.startsWith("/Admin/Order")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }
  useEffect(() => {
    DetermineUser();
  }, []);

  const { AdminID, UserID, OrderID } = useParams();

  // GETTING ORDER DETAILS

  return (
    <div className="Order" id="Order">
      <div className="Order-Container">
        <div className="Order-Title">
          <div className="Title-Container">
            <div className="GoBack">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3>Back</h3>
            </div>
            <div className="ID-Desktop">
              <p>
                OrderID : <span>{OrderID}</span>
              </p>
              <p>| Order Shipped</p>
              {props.status === "Ordered" && <p>Order Received</p>}
              {props.status === "Shipped" && <p>OrderShipped</p>}
              {props.status === "Cancelled" && <p>OrderCancelled</p>}
              {props.status === "Received" && <p>Order Received</p>}
            </div>
          </div>
        </div>
        <div className="Status-Card">
          <div className="Status-Detail">
            <div className="Status-Main">
              <h2>We are Packing your orders</h2>
            </div>
          </div>
          <div className="Status-Image">
            <svg
              width="60px"
              height="60px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13.0001H13M7 9.0001H9M7 17.0001H13M16 21.0001H18.5M17 21.0001H7.8C6.11984 21.0001 5.27976 21.0001 4.63803 20.6731C4.07354 20.3855 3.6146 19.9266 3.32698 19.3621C3 18.7203 3 17.8803 3 16.2001V5.75719C3 4.8518 3 4.3991 3.1902 4.13658C3.35611 3.90758 3.61123 3.75953 3.89237 3.72909C4.21467 3.6942 4.60772 3.9188 5.39382 4.368L5.70618 4.54649C5.99552 4.71183 6.14019 4.7945 6.29383 4.82687C6.42978 4.85551 6.57022 4.85551 6.70617 4.82687C6.85981 4.7945 7.00448 4.71183 7.29382 4.54649L9.20618 3.45372C9.49552 3.28838 9.64019 3.20571 9.79383 3.17334C9.92978 3.14469 10.0702 3.14469 10.2062 3.17334C10.3598 3.20571 10.5045 3.28838 10.7938 3.45372L12.7062 4.54649C12.9955 4.71183 13.1402 4.7945 13.2938 4.82687C13.4298 4.85551 13.5702 4.85551 13.7062 4.82687C13.8598 4.7945 14.0045 4.71183 14.2938 4.54649L14.6062 4.368C15.3923 3.9188 15.7853 3.6942 16.1076 3.72909C16.3888 3.75953 16.6439 3.90758 16.8098 4.13658C17 4.3991 17 4.8518 17 5.75719V14.0001M17 13.0001H21V19.0001C21 20.1047 20.1046 21.0001 19 21.0001C17.8954 21.0001 17 20.1047 17 19.0001V13.0001Z"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Progress */}
        <div className="Section-Container ">
          <div className="Section Visual">
            <div className="Progress">
              <div className="Icon">
                <div className="Circle-Status completed">
                  <div className="Image">
                    <svg
                      fill="#000000"
                      width="60px"
                      height="60px"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="03 packing box" id="_03_packing_box">
                        <path d="M45.09,22.76H20.96l-4.25-5.93a2,2,0,0,0-1.62-.84H6.79A2.005,2.005,0,0,0,5.1,19.07l2.99,4.65L3.9,29.3a2,2,0,0,0,1.6,3.2H6.88L6.86,54.68a2,2,0,0,0,2,2H45.09a2.008,2.008,0,0,0,2.01-2V24.76A2.008,2.008,0,0,0,45.09,22.76ZM6.79,17.99h8.3l3.41,4.77H9.85ZM5.5,30.5l4.31-5.74H35.38L31.07,30.5ZM36.38,54.68H8.86L8.88,32.5H31.07a2,2,0,0,0,1.6-.8l3.71-4.94Zm8.71,0H38.38V24.76H45.1Z" />

                        <path d="M60.39,22.76A16.958,16.958,0,0,0,45.12,7.39,16.774,16.774,0,0,0,31.9,12.03l-1.92-1.06a1,1,0,0,0-.99.01,1.014,1.014,0,0,0-.5.85l-.03,1.52c-.02.93-.05,1.86-.04,2.79,0,.58.01,1.17.02,1.76l.01.88a1.333,1.333,0,0,1,0,.2,4.29,4.29,0,0,0,.04.78,1.018,1.018,0,0,0,.46.65.958.958,0,0,0,.79.11l8.34-2.36a1,1,0,0,0,.38-1.71l-1.44-1.27a10.976,10.976,0,0,1,7.53-2.12A11.1,11.1,0,0,1,54.64,23.34a10.936,10.936,0,0,1-3.99,9.25,2.667,2.667,0,0,0-.96,1.82,2.867,2.867,0,0,0,.64,2.05l.22.25a2.769,2.769,0,0,0,2.13,1,2.714,2.714,0,0,0,1.73-.63A16.882,16.882,0,0,0,60.39,22.76ZM53.12,35.55a.749.749,0,0,1-1.04-.13l-.21-.25a.754.754,0,0,1-.18-.57.663.663,0,0,1,.24-.47,12.9,12.9,0,0,0,4.7-10.92A13.111,13.111,0,0,0,44.72,11.06c-.38-.03-.76-.04-1.14-.04a12.9,12.9,0,0,0-8.78,3.4.963.963,0,0,0-.32.75.975.975,0,0,0,.34.74l.95.84-5.33,1.5v-.39c-.01-.57-.02-1.15-.02-1.73-.01-.87.01-1.74.04-2.61l1.13.63a1,1,0,0,0,1.21-.19A14.85,14.85,0,1,1,53.12,35.55Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="Text">
                    <h3>Preparing to ship</h3>
                  </div>
                </div>
                <div className="bar-progress"></div>
              </div>
            </div>
            <div className="Progress">
              <div className="Icon">
                <div className="Circle-Status">
                  <div className="Image">
                    <svg
                      fill="#000000"
                      width="60px"
                      height="60px"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="26 delivery truck" id="_26_delivery_truck">
                        <path d="M17.03,44.12a3.175,3.175,0,1,0,3.18,3.17A3.18,3.18,0,0,0,17.03,44.12Zm0,4.35a1.175,1.175,0,1,1,1.18-1.18A1.176,1.176,0,0,1,17.03,48.47Z" />

                        <path d="M48.63,44.12a3.175,3.175,0,1,0,3.18,3.17A3.18,3.18,0,0,0,48.63,44.12Zm0,4.35a1.175,1.175,0,1,1,1.18-1.18A1.176,1.176,0,0,1,48.63,48.47Z" />

                        <path d="M51.52,24.73l-4.11-4.35a1.007,1.007,0,0,0-.73-.32h-4.6a1,1,0,0,0-1,1V27.6a1,1,0,0,0,1,1h8.71a1,1,0,0,0,1-1V25.42A1.03,1.03,0,0,0,51.52,24.73ZM49.79,26.6H43.08V22.06h3.17l3.54,3.75Z" />

                        <path d="M60.02,28.83,49.7,16.46a2.113,2.113,0,0,0-1.6-.76H38.81a2.1,2.1,0,0,0-2.09,2.09V30.95H35.46V21.06a1,1,0,0,0-1-1H27.83V10.17a1,1,0,0,0-1-1H15.94a1,1,0,0,0-1,1v9.89H8.32a1,1,0,0,0-1,1v9.89H4.5a1,1,0,0,0-1,1V42.84a1,1,0,0,0,1,1h5.84a7.535,7.535,0,1,0,14.23,3.45,7.461,7.461,0,0,0-.85-3.45H41.94a7.531,7.531,0,1,0,14.22,3.45,7.453,7.453,0,0,0-.84-3.45H59.5a1,1,0,0,0,1-1V30.17A2.118,2.118,0,0,0,60.02,28.83ZM33.46,22.06v8.89H24.57V22.06ZM16.94,11.17h8.89v8.89H16.94Zm5.63,10.89v8.89H20.21V22.06Zm-13.25,0h8.89v8.89H9.32Zm7.71,30.77a5.521,5.521,0,0,1-4.09-9.24,1.5,1.5,0,0,0,.11-.13,5.533,5.533,0,1,1,3.98,9.37ZM36.72,41.84H22.22a7.5,7.5,0,0,0-10.37,0H5.5V32.95H36.72ZM48.63,52.83a5.535,5.535,0,1,1,5.53-5.54A5.537,5.537,0,0,1,48.63,52.83ZM58.5,37.49H56.14V35.13H58.5Zm0-4.36H56.14a2.006,2.006,0,0,0-2,2v2.36a2.006,2.006,0,0,0,2,2H58.5v2.35H53.81a7.49,7.49,0,0,0-10.36,0H38.72V17.79a.1.1,0,0,1,.09-.09l9.35.04L58.5,30.17Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="Text">
                    <h3>To be Delivered</h3>
                  </div>
                </div>
                <div className="bar-progress"></div>
              </div>
            </div>
            <div className="Progress">
              <div className="Icon">
                <div className="Circle-Status">
                  <div className="Image">
                    <svg
                      fill="#000000"
                      width="60px"
                      height="60px"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        data-name="16 hand delivery box"
                        id="_16_hand_delivery_box"
                      >
                        <path d="M60.27,42.62l-.43-1.19a3.851,3.851,0,0,0-4.2-2.42c-.05.01-.09.01-.14.02V13.5c0-.01-.01-.02-.01-.04a.8.8,0,0,0-.06-.3.637.637,0,0,0-.02-.07c-.01-.01-.01-.03-.02-.04l-3-6a.988.988,0,0,0-.89-.55h-27a1,1,0,0,0-.83.45l-4,6a.388.388,0,0,0-.06.11c-.01.03-.03.05-.04.08a1.372,1.372,0,0,0-.07.34V32.92c-.15.02-.3.04-.45.07l-4.08.92V30.5a2.006,2.006,0,0,0-2-2H5.5a2.006,2.006,0,0,0-2,2v25a2.006,2.006,0,0,0,2,2h7.47a2.006,2.006,0,0,0,2-2V52.89L31.5,55.88a12.715,12.715,0,0,0,7-.69l19.52-7.73A3.8,3.8,0,0,0,60.27,42.62ZM12.97,55.5H5.5v-25h7.47ZM42.5,8.5h8.38l2,4H42.5Zm-8,0h6v4h-6Zm0,6h6v12l-2.4-1.8a1,1,0,0,0-1.2,0l-2.4,1.8Zm-9.46-6H32.5v4H22.37Zm-3.54,6h11v14a.977.977,0,0,0,.55.89,1,1,0,0,0,1.05-.09l3.4-2.55,3.4,2.55a1.029,1.029,0,0,0,.6.2.908.908,0,0,0,.45-.11.977.977,0,0,0,.55-.89v-14h11V39.28c-.5.07-1.01.15-1.5.24-1.01.16-2.06.34-3.08.44a53.558,53.558,0,0,1-7.03.33,53.365,53.365,0,0,1-5.91-.52,3.661,3.661,0,0,0-.33-2.03,4,4,0,0,0-2.54-2.08l-9.48-2.57a9.536,9.536,0,0,0-2.13-.32ZM57.28,45.6,37.77,53.33a10.729,10.729,0,0,1-5.91.58L14.97,50.86V35.96l4.52-1.02a7.517,7.517,0,0,1,3.62.08l9.47,2.57a1.992,1.992,0,0,1,1.27,1.02,1.725,1.725,0,0,1,.03,1.44,2.036,2.036,0,0,1-2.02,1.17l-8.22-1.7a1,1,0,0,0-.41,1.96l8.28,1.71a.355.355,0,0,0,.1.02c.14.01.27.02.4.02a4.068,4.068,0,0,0,3.2-1.55,56.551,56.551,0,0,0,6.62.61,55.905,55.905,0,0,0,7.3-.34c1.08-.11,2.16-.29,3.2-.46,1.14-.19,2.32-.39,3.48-.49a1.969,1.969,0,0,1,2.15,1.12l.43,1.18A1.814,1.814,0,0,1,57.28,45.6Z" />

                        <path d="M49.5,31.5h-6a2.006,2.006,0,0,0-2,2v2a2.006,2.006,0,0,0,2,2h6a2.006,2.006,0,0,0,2-2v-2A2.006,2.006,0,0,0,49.5,31.5Zm0,4h-6v-2h6Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="Text">
                    <h3>Delivered</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shipment Details */}
        <div className="Section-Container Details">
          <div className="Section Address">
            <div className="Icon">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="Details">
              <div className="Title">
                <h3>Delivery Address</h3>
              </div>
              <div className="address">
                <p className="Name">John Cole</p>
                <p className="Phone">+0123456789</p>
                <p className="Line1">NO 14 JALAN TENAGA 16</p>
                <p className="Line2">TAMAN TENAGA 43000 KAJANG</p>
                <p className="StateCountry">SELANGOR , MALAYSIA</p>
              </div>
            </div>
          </div>
          <div className="Section Payment">
            <div className="Icon">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C16 6.07003 16 5.60504 15.8978 5.22354C15.6204 4.18827 14.8117 3.37962 13.7765 3.10222C13.395 3 12.93 3 12 3C11.07 3 10.605 3 10.2235 3.10222C9.18827 3.37962 8.37962 4.18827 8.10222 5.22354C8 5.60504 8 6.07003 8 7M14 11.5C13.5 11.376 12.6851 11.3714 12 11.376M12 11.376C11.7709 11.3775 11.9094 11.3678 11.6 11.376C10.7926 11.4012 10.0016 11.7368 10 12.6875C9.99825 13.7004 11 14 12 14C13 14 14 14.2312 14 15.3125C14 16.1251 13.1925 16.4812 12.1861 16.5991C11.3861 16.5991 11 16.625 10 16.5M12 11.376L12 10M12 16.5995V18M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="Details">
              <div className="Title">
                <h3>Payment Method</h3>
              </div>
              <div className="method">
                <p className="Name">Cash on Delivery</p>
              </div>
            </div>
          </div>
          <div className="Section Order">
            <div className="Icon">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 9H15M9 12H15M9 15H15M5 3V21L8 19L10 21L12 19L14 21L16 19L19 21V3L16 5L14 3L12 5L10 3L8 5L5 3Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="Details">
              <div className="Title">
                <h3>Order Details</h3>
              </div>
              <div className="detail">
                <div className="details-section">
                  <h3>Order ID</h3>
                  <h3>OID2400512</h3>
                </div>
                <div className="details-section">
                  <p>Order Time</p>
                  <p>13-05-2024 00:30 </p>
                </div>
                <div className="details-section">
                  <p>Item Ordered</p>
                  <p>25 total products</p>
                </div>
                <div className="details-section">
                  <p>Total Amount</p>
                  <p>RM 2500.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Details */}
        <div className="Section-Container">
          <div className="Section Product">
            <ProductUserCard OnOrder={true} />
            <ProductUserCard OnOrder={true} />
            <ProductUserCard OnOrder={true} />
            <ProductUserCard OnOrder={true} />
            <ProductUserCard OnOrder={true} />
            <div className="Order-Total">
              <div className="Subtotal">
                <h3>
                  <span className="reason">Tax (10%)</span>:
                  <span className="amount">RM250.00</span>
                </h3>
                <h3>
                  <span className="reason">Service Fee (10%)</span>:
                  <span className="amount">RM250.00</span>
                </h3>
                <h3>
                  <span className="reason">Delivery Fee (10%)</span>:
                  <span className="amount">RM250.00</span>
                </h3>
              </div>
              <div className="total">
                <h3>
                  <span className="reason">Total</span>:
                  <span className="amount">RM2500.00</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="Section-Container Button">
          <Button
            title="Receive Order"
            value="Receive Order"
            type="link"
            link={`/Product/`}
            className="fill primary"
          />
          <Button
            title="Cancel Order"
            value="Cancel Order"
            type="link"
            link={`/Product/`}
            className="outline gray cancel"
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
