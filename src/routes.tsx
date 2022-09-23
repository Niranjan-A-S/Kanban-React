import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { KanbanBoard, CardInfo, UserProfile, NoMatch } from "./pages";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"kanban-board"} />} />
        <Route path="kanban-board">
          <Route index element={<KanbanBoard />} />
          <Route path="card-info/:id" element={<CardInfo />} />
          <Route path="profile">
            <Route index element={<UserProfile />} />
            <Route path=":username" element={<UserProfile />} />
            <Route path=":username/:designation" element={<UserProfile />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
