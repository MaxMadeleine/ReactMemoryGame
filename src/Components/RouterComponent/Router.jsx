import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../PageComponents/HomePageComponent/HomePage";


export const Router = () => {

    return (
    <Routes>
      <Route index element={<HomePage/>}/>
    </Routes>
    )
  }