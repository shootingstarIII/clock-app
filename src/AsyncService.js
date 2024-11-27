class AsyncService {
  // Fetch a random quote
  async getQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      throw new Error(`Quote error: ${error.message}`);
    }
  }

  // Fetch location data
  async getLocation() {
    try {
      const response = await fetch("http://ip-api.com/json");
      if (!response.ok) {
        throw new Error("Failed to fetch location");
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Location error: ${error.message}`);
    }
  }

  // Fetch time zone data based on latitude and longitude
  async getTimeZone(lat, lon) {
    try {
      const response = await fetch(
        `https://world-time1.p.rapidapi.com/timezone/auto?lat=${lat}&lng=${lon}`,
        {
          headers: {
            "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY", // Replace with your key
            "X-RapidAPI-Host": "world-time1.p.rapidapi.com",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch time zone");
      }
      const timeZoneData = await response.json();
      return timeZoneData;
    } catch (error) {
      throw new Error(`Time zone error: ${error.message}`);
    }
  }

  // Helper function to get the date in the correct timezone
  getDate(timezone) {
    const date = new Date();
    return date.toLocaleString("en-US", { timeZone: timezone });
  }
}

// Export a singleton instance of the service
const asyncService = new AsyncService();
export default asyncService;
