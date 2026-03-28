/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { CarDetail } from "./pages/CarDetail";
import { Search } from "./pages/Search";
import { Cars } from "./pages/Cars";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="car/:id" element={<CarDetail />} />
          <Route path="search" element={<Search />} />
          <Route path="cars" element={<Cars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
