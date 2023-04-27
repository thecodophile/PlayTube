import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const DataContext = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState("loading");
  const [searchResults, setSearchResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    fetchSelectedCaregoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCaregoryData = async (query) => {
    setLoading(true);
    const data = await fetchDataFromApi(`search/?q=${query}`);
    // console.log(data.contents); //i did data.contents because the api gives all video data inside contents
    setSearchResults(data.contents);
    setLoading(false);
  };

  //I make sure that at first browser checks what the preferred theme is, like it is going to check if your browser prefers dark mode or light mode and it is going to act to it accordingly when the website first loads up
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("root").classList.add("dark");
    } else {
      document.getElementById("root").classList.remove("dark");
    }
  }, [theme]);

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
        theme,
        setTheme,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
