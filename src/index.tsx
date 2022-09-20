import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardInfo, KanbanBoard, UserProfile } from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="kanban-board" element={<KanbanBoard />} />
        <Route path="kanban-board/card-info" element={<CardInfo />} />
        <Route path="profile" element={<UserProfile />}>
          <Route path="username/:username" element={<UserProfile />} />
          <Route path="designation/:designation" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
