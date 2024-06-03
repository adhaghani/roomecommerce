import React, { useEffect, useState } from "react";

import "./Notification.css";
const Notification = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Add event listener to listen for the showNotification event
    const handleShowNotification = (event) => {
      const { message, type } = event.detail;
      setNotification({ message, type });

      // Set a timeout to hide the notification after 1 second
      const timeoutId = setTimeout(() => {
        setNotification(null);
      }, 1000);

      // Clean up the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    };

    window.addEventListener("showNotification", handleShowNotification);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("showNotification", handleShowNotification);
    };
  }, []);

  return (
    <div className="Notification" id="Notification">
      {notification && (
        <div className={`Notification-Container ${notification.type}`}>
          <div
            className={`Notification-Message`}
            style={{
              opacity: 1,
              transition: "opacity 0.5s ease-in-out"
            }}
          >
            <div className="image">
              {notification.type === "success" && (
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12.6111L8.92308 17.5L20 6.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              {notification.type === "Error" && (
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0001 9.00007V12.0001M12.0001 15.0001H12.0101M3 12.0001L12.0001 3L21.0001 12.0001L12.0001 21.0001L3 12.0001Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            <div className="Message">{notification.message}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
