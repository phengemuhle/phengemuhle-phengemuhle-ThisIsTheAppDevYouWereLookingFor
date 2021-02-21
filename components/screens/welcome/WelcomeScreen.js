import React, { useState } from "react";
import NavigationScreen from "../NavigationScreen";
import ChoiceScreen from "./ChoiceScreen";

const WelcomeScreen = () => {
  const [goHome, setGoHome] = useState(false);

  const sendHome = () => {
    console.log("going Home");
    setGoHome(!goHome);
  };
  return (
    <>{goHome ? <NavigationScreen /> : <ChoiceScreen sendHome={sendHome} />}</>
  );
};

export default WelcomeScreen;