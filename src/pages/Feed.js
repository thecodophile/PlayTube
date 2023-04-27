import React, { useContext, useEffect } from "react";

import { DataContext } from "../context/contextApi";
import LeftNav from "../components/LeftNav";
import VideoCard from "../components/VideoCard";
import UseOnline from "../utils/UseOnline";
import OfflineComponent from "../shared/OfflineComponent";
import ShimmerVideoCard from "../shared/ShimmerVideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(DataContext);
  // console.log("from feed", searchResults);

  const isOnline = UseOnline();

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex h-[calc(100%-56px)]">
      <LeftNav />

      {!isOnline && (
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <OfflineComponent />
        </div>
      )}
      {isOnline && (
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {/* When loading is true means data is not fetched yet meanwhile that time show Shimmer UI 
             when data fetching is done means loading is false and that means we get searchResults then show the data in the dom */}
            {loading
              ? Array(24)
                  .fill("")
                  .map((e, index) => {
                    return <ShimmerVideoCard key={index} />;
                  })
              : searchResults.map((item, index) => {
                  if (item.type !== "video") return false;
                  return <VideoCard key={index} video={item?.video} />;
                  // i allways prefered to pass unique key that i got from the api and that is standered way also but for this api some unique key like videoId present twice and more in the searchResults, i don't khow why. So, forcefully i chose map index :(
                })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
