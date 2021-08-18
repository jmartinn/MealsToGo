import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyB8b4b_JZ1ZIPIZZMCMadeUkNWT4qlQoxI",
  authDomain: "mealstogo-a7c8e.firebaseapp.com",
  projectId: "mealstogo-a7c8e",
  storageBucket: "mealstogo-a7c8e.appspot.com",
  messagingSenderId: "222867277590",
  appId: "1:222867277590:web:383ad071ac33662ce3b237",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
