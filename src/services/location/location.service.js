import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://us-central1-mealstogo-a7c8e.cloudfunctions.net/geocode?city=${searchTerm}`
  ).then((result) => {
    return result.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  console.log(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
