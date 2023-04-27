import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const SuggestionVideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className="flex mb-4">
        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <img
            src={video?.thumbnails[0]?.url}
            alt="thumbnails"
            className="h-full w-full object-fill "
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>

        <div className="flex text-black dark:text-white">
          {/* <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                src={video?.author?.avatar[0]?.url}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div> */}

          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2 lg:text-sm xl:text-sm ">
              {video?.title}
            </span>

            <span className="text-[12px] font-bold dark:font-semibold mt-2 text-black/[0.8] dark:text-white/[0.7] flex items-center lg:text-[12px] xl:text-[12px]">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-black/[0.7] dark:text-white/[0.5] text-[12px] ml-1 lg:text-[12px] xl:text-[12px]" />
              )}
            </span>

            <div className="flex text-[12px] font-semibold text-black/[0.8] dark:text-white/[0.7] truncate overflow-hidden lg:text-[12px] xl:text-[12px]">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex text-[24px] text-black/[0.8] dark:text-white/[0.7] font-bold leading-none relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionVideoCard;
