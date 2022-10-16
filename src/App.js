import React from "react";
import "./styles/app.scss";

import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </div>
  );
}
