const liveHost = "https://us-central1-mealstogo-a7c8e.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-a7c8e/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
