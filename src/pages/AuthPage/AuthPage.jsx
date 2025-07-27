import React, { useState } from "react";
import { AuthBody,AuthHeader } from "./AuthPageStyles";
import backgroundImage from "../../assets/images/hero-netflix.jpg";
import Login from "../../components/Auth/Login";
import Signup from "../../components/Auth/Signup";
import HomePage from "../HomePage/HomePage";
const AuthPage = () => {
  const [switchComponent, setSwitchComponent] = useState(true);
  return (
    <>
    <AuthBody>
      <AuthHeader><h2 className="NetflixLogo">Fakeflix</h2></AuthHeader>
      <img src={backgroundImage} alt="background-image" />
      {switchComponent ? <Login switchView={setSwitchComponent}/> : <Signup switchView={setSwitchComponent}/>}
    </AuthBody>

    </>
  );
};

export default AuthPage;
