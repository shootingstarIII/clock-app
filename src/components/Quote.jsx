/* eslint-disable react/prop-types */
import MyIcon from "./MyIcon";
import IconRefresh from "../assets/desktop/icon-refresh.svg";

const Quote = ({ quoteData, getQuote }) => {
  return (
    <div className="flex flex-col font-inter text-body w-2/6 pb-[140px]">
      {quoteData && (
        <>
          <div className="flex items-center">
            <span>&quot;{quoteData.content}&quot;</span>
            <button className="pl-4 flex-shrink-0" onClick={getQuote}>
              {MyIcon(IconRefresh)}
            </button>
          </div>
          <div className="font-bold">{quoteData.author}</div>
        </>
      )}
    </div>
  );
};

export default Quote;
