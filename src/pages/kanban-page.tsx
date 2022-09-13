import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { KanbanContainer } from "../containers";

export const KanbanBoard = () => {
  return (
    <ThemeProvider theme={theme}>
      <KanbanContainer />
    </ThemeProvider>
  );
};
