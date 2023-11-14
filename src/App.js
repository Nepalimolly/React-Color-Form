import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ColorsList from "./ColorsList";
import ColorDetails from "./ColorDetail";
import NewColorForm from "./NewColorForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors/:color" element={<ColorDetails />} />
        <Route path="/colors/new" element={<NewColorForm />} />
        <Route path="/colors" element={<ColorsList />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
