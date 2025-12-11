export const isDayTime = (timezone = null) => {
  const now = new Date();
  const currentHour = timezone
    ? parseInt(
        now.toLocaleString("en-US", {
          timeZone: timezone,
          hour: "2-digit",
          hour12: false,
        })
      )
    : now.getHours();
  return currentHour >= 6 && currentHour < 18; // Daytime is from 6 AM to 6 PM
};

export const getDate = (timezone) => {
  if (!timezone) {
    return new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }
  return new Date().toLocaleString("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export const formatTimezoneName = (timezone) => {
  if (!timezone) return "";
  // Format timezone string like "Europe/London" to "LONDON, UK"
  // or "America/New_York" to "NEW YORK, US"
  const parts = timezone.split("/");
  if (parts.length === 2) {
    const city = parts[1].replace(/_/g, " ");
    // Try to extract country code if available
    return city.toUpperCase();
  }
  return timezone.toUpperCase();
};
