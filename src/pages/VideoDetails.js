import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { DataContext } from "../context/contextApi";
import SuggestionVideoCard from "../components/SuggestionVideoCard";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(DataContext);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  // fetch Data for that perticular video
  const fetchVideoDetails = async () => {
    setLoading(true);
    const data = await fetchDataFromApi(`video/details/?id=${id}`);
    // console.log(data);
    setVideo(data);
    setLoading(false);
  };

  // fetch Data for the suggestion videos
  const fetchRelatedVideos = async () => {
    setLoading(true);
    const data = await fetchDataFromApi(`video/related-contents/?id=${id}`);
    // console.log(data);
    setRelatedVideos(data);
    setLoading(false);
  };

  return (
    <div className="flex flex-row justify-center h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row ">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>

          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>

          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    src={video?.author?.avatar[0]?.url}
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col ml-3">
                <div className="text-white text-base font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                  )}
                </div>

                <div className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>

            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiFillLike className="text-xl text-white mr-2" />
                <span>{`${abbreviateNumber(
                  video?.stats?.likes,
                  2
                )} Likes`}</span>
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                <FaEye className="text-xl text-white mr-2" />
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} Views`}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestionVideoCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
