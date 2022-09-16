import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { KanbanContainer } from "../containers";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const KanbanBoard = () => (
  <DndProvider backend={HTML5Backend}>
    <ThemeProvider theme={theme}>
      <KanbanContainer />
    </ThemeProvider>
  </DndProvider>
);
