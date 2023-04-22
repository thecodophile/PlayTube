import React from "react";

const ShimmerSuggestionVideoCard = () => {
  return (
    <div className="flex mb-4">
      <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-500/[0.4]">
        {/* Thumbnail */}
      </div>

      <div className="flex">
        <div className="flex flex-col mt-1 ml-3">
          <span className="bg-slate-400/[0.4] rounded-md py-3 px-20 md:px-24 mb-2">
            {/* Video Title */}
          </span>

          <span className="mt-2 flex bg-slate-500/[0.4] rounded-md py-2  md:px-12 mb-3">
            {/* Channel name */}
          </span>

          <div className="flex bg-slate-500/[0.4] rounded-md py-2 px-10 md:px-12">
            {/* views and date */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerSuggestionVideoCard;
