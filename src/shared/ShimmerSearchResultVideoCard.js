import React from "react";

const ShimmerSearchResultVideoCard = () => {
  return (
    <div className="flex flex-col md:flex-row mb-8 md:mb-3 rounded-xl md:p-4">
      <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-500/[0.4]">
        {/*Thumbnail*/}
      </div>

      <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0">
        <span className="px-32 md:px-60 py-3 md:py-4 mb-1 rounded-md bg-slate-400/[0.4]">
          {/*Video Title*/}
        </span>

        <span className="md:pr-24 md:my-4 px-20 py-2 md:py-6 rounded-md mb-1 lg:mb-8 bg-slate-400/[0.3]">
          {/* Video Description */}
        </span>

        <div className=" hidden md:flex mb-2 px-10 py-2 rounded-md bg-slate-500/[0.4]">
          {/* views and Date */}
        </div>

        <div className="hidden md:flex items-center">
          <div className="flex items-start mr-3">
            <div className="flex h-9 w-9 rounded-full overflow-hidden bg-slate-300/[0.4]">
              {/* Avatar */}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="mt-2 flex px-16 py-2 rounded-md bg-slate-400/[0.5]">
              {/* Channel Name */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerSearchResultVideoCard;
