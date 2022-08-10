// React
import { useState } from "react";
import { Routes, Route } from "react-router";
// Page
import MainPage from "./page/MainPage";
// Components
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
