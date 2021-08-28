const liveHost = "https://us-central1-mealstogo-a7c8e.cloudfunctions.net";
const localHost = "http://bc34-217-61-224-91.ngrok.io/mealstogo-a7c8e/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
