import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://localhost:5001/mealstogo-a7c8e/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    console.log(res.json);
    return res.json();
  });
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
