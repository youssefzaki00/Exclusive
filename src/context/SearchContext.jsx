import { createContext, useState } from "react";

export const SearchContext = createContext();
const SearchProvider = (props) => {
  const [searchResult, setSearchResult] = useState("");
  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult }}>
      {props.children}
    </SearchContext.Provider>
  );
};
export default SearchProvider;
