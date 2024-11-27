/* eslint-disable react/prop-types */
const Section = ({ data }) => {
  console.log(data);

  return (
    <div className="flex-grow bg-color-4 z-30 opacity-85 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 items-center px-[120px] py-[65px]">
      {/* First column */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h2 className="text-h3">CURRENT TIMEZONE</h2>
          <p className="text-h2 font-bold">{data.timezone}</p>
        </div>
        <div className="flex flex-col">
          <h2>DAY OF THE YEAR</h2>
          <p className="text-h2 font-bold">{data.day_of_year}</p>
        </div>
      </div>

      {/* Separator line */}
      <div className="hidden lg:block w-full h-full bg-gray-300"></div>

      {/* Second column */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h2>DAY OF THE WEEK</h2>
          <p className="text-h2 font-bold">{data.day_of_week}</p>
        </div>
        <div className="flex flex-col">
          <h2>WEEK NUMBER</h2>
          <p className="text-h2 font-bold">{data.week_number}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
