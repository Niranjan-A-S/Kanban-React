import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { KanbanContainer } from "../containers";

export const KanbanPage = () => (
  <DndProvider backend={HTML5Backend}>
    <ThemeProvider theme={theme}>
      <KanbanContainer />
    </ThemeProvider>
  </DndProvider>
);
