import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-a7c8e.cloudfunctions.net";
const localHost = "http://35c1-217-61-224-91.ngrok.io/mealstogo-a7c8e/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
