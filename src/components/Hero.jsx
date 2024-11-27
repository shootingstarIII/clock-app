import { useEffect, useState } from "react";

import MyIcon from "./MyIcon";
import { getDate, isDayTime } from "../utils/timeUtils";
import iconMoon from "../assets/desktop/icon-moon.svg";
import Quote from "./Quote";
import IconSun from "../assets/desktop/icon-sun.svg";
import BackDay from "../assets/desktop/bg-image-daytime.jpg";
import BackNight from "../assets/desktop/bg-image-nighttime.jpg";
import Section from "./Section";
import Button from "./Button";

const Hero = () => {
  const [timeZoneObj, setTimeZoneObj] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [showSection, setShowSection] = useState(true);
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    // Get Location Data from ip-api
    const fetchTimeZone = async () => {
      try {
        const timeZoneResponse = await fetch(`http://worldtimeapi.org/api/ip`);
        const timeZoneData = await timeZoneResponse.json();
        const timezone = timeZoneData.timezone;

        setCurrentTime(getDate(timezone));
        setTimeZoneObj(timeZoneData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTimeZone();
    getQuote();
  }, []);

  const toggleSection = () => {
    setShowSection((prev) => !prev);
  };

  async function getQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setQuoteData(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  }

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full ">
        <img
          src={isDayTime() ? BackDay : BackNight}
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="relative min-h-screen w-full">
        <div className="px-[120px] py-9  text-color-3 flex flex-col justify-start ">
          {showSection && <Quote quoteData={quoteData} getQuote={getQuote} />}
          <div>
            <div className=" font-inter text-h3 flex items-center tracking-[4.8px]">
              <span className="inline pr-2">
                {MyIcon(isDayTime() ? IconSun : iconMoon, "24", "22")}
              </span>
              <p>
                {isDayTime()
                  ? "GOOD MORNING, ITS CURRENTLY"
                  : "GOOD EVENING, ITS CURRENTLY"}
              </p>
            </div>
            <div className="flex justify-start align-bottom py-5">
              <p className="font-inter text-h1 font-bold uppercase">
                {currentTime}
              </p>
              <p className="flex flex-col justify-end uppercase text-h2">
                {timeZoneObj && timeZoneObj.abbreviation}
              </p>
            </div>
            {timeZoneObj && (
              <div className="flex justify-between items-center font-inter text-h3 text-bold uppercase tracking-[4.8px]">
                IN {timeZoneObj.timezone}
                <Button
                  handleButtonClick={toggleSection}
                  showSection={showSection}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col max-h-screen">
          {!showSection && <Section data={timeZoneObj} />}
        </div>
      </div>
    </>
  );
};

export default Hero;
