import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AppContext } from "./context/contextApi";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import SearchResult from "./pages/SearchResult";
import VideoDetails from "./pages/VideoDetails";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Feed /> },
      { path: "/searchResult/:searchQuery", element: <SearchResult /> },
      { path: "/video/:id", element: <VideoDetails /> },
    ],
  },
]);

function App() {
  return (
    <AppContext>
      <div className="flex flex-col h-full">
        <RouterProvider router={appRouter} />
      </div>
    </AppContext>
  );
}

export default App;
