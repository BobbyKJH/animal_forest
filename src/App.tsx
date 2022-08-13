// React
import { useState } from "react";
import { Routes, Route } from "react-router";
// Page
import MainPage from "./page/MainPage";
import VillagersListPage from "./page/list/VillagersListPage";
import DetailPage from "./page/detail/DetailPage";
// Components
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* List Page */}
        <Route path="/villagers" element={<VillagersListPage />} />

        {/* DetailPage */}
        <Route path="/:link/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default App;
