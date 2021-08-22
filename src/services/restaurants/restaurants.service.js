import camelize from "camelize";
const axios = require("axios").default;

export const restaurantsRequest = (location) => {
  return axios
    .get(
      `http://localhost:5001/mealstogo-a7c8e/us-central1/placesNearby?location=${location}`
    )
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
