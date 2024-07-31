export const animationCreate = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW({ live: false }).init();
};

export const getformatedDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);

  const formattedDate = date.toLocaleDateString(); // Format the date
  const formattedTime = date.toLocaleTimeString(); // Format the time

  return `${formattedDate} ${formattedTime}`;
};
