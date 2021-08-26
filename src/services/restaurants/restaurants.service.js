import camelize from "camelize";
import { host } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(
    `https://us-central1-mealstogo-a7c8e.cloudfunctions.net/placesNearby?location=${location}`
  ).then((response) => {
    return response.json();
  });
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
