import { mocks } from "./mock/";
import camelize from "camelize";
import { result } from "lodash";
import { transform } from "async";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if(!mock) {
      reject("Not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = (result) => {
  return camelize(result);
}
restaurantsRequest().then(restaurantsTransform)
.then(transformedResponse => {
  console.log(transformedResponse);
})
.catch((err) => {
  console.log(err)
});