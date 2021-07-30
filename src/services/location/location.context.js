import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    useEffect(() => {
      if(!keyword.length) {
        // Don't do anything
        return;
      }
      locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      }).catch((error) => {
        setIsLoading(false);
        setError(error);
      })
    }, [keyword]);
  };

  return (
    <LocationContext.Provider
    value ={{
      isLoading,
      error,
      location,
      search: onSearch,
      keyword,
    }}
    >
      {children}
    </LocationContext.Provider>
  )
}