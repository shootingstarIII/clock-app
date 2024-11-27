export const isDayTime = () => {
  const currentHour = new Date().getHours();
  return currentHour >= 6 && currentHour < 18; // Daytime is from 6 AM to 6 PM
};

export const getDate = (timezone) => {
  return new Date().toLocaleString("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
