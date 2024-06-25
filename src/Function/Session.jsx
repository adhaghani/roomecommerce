// Session.js

export const setSession = (sessionData) => {
  localStorage.setItem("session", JSON.stringify(sessionData));
};

export const getSession = () => {
  const sessionData = localStorage.getItem("session");
  return sessionData ? JSON.parse(sessionData) : null;
};

export const clearSession = () => {
  localStorage.removeItem("session");
};
