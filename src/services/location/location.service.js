import camelize from "camelize";
const axios = require("axios").default;

export const locationRequest = (searchTerm) => {
  console.log("Started the location request progress...");
  return axios
    .get(
      `http://localhost:5001/mealstogo-a7c8e/us-central1/geocode?city=${searchTerm}`
    )
    .then((res) => {
      return res;
    })
    .catch((err) => console.log("This is the error", err));
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
