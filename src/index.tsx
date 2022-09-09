import React from "react";
import ReactDOM from "react-dom/client";
import { KanbanBoard } from "./pages/kanban-board/container/KanbanBoard";

const strictMode = process.env.NODE_ENV === "production";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  (strictMode && (
    <React.StrictMode>
      <KanbanBoard />
    </React.StrictMode>
  )) || <KanbanBoard />
);
