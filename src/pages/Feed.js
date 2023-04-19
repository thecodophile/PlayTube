import React from "react";

import { DataContext } from "../context/contextApi";
import LeftNav from "../components/LeftNav";

const Feed = () => {
  return (
    <div className="flex h-[calc(100%-56px)]">
      <LeftNav />
    </div>
  );
};

export default Feed;
