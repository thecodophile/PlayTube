import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const DataContext = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState("loading");
  const [searchResults, setSearchResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCaregoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCaregoryData = async (query) => {
    setLoading(true);
    const data = await fetchDataFromApi(`search/?q=${query}`);
    console.log(data.contents); //i did data.contents because the api gives all video data inside contents
    setSearchResults(data.contents);
    setLoading(false);
  };

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
