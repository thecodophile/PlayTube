import React from "react";

const ShimmerVideoCard = () => {
  return (
    <div className="flex flex-col mb-8">
      <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden bg-slate-500/[0.4]">
        {/*Thumbnail*/}
      </div>

      <div className="flex mt-3">
        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full bg-slate-300/[0.4]">
            {/*Avatar*/}
          </div>
        </div>

        <div className="flex flex-col ml-3">
          <span className="bg-slate-400/[0.4] rounded-md py-2 px-32 md:px-[90px]">
            {/*Video Title*/}
          </span>

          <span className="mt-2 flex bg-slate-500/[0.4] rounded-md py-2 px-32 md:px-[90px] ">
            {/*Author Details*/}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;
