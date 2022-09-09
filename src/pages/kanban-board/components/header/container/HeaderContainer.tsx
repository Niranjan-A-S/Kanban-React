import { AddTaskButton } from "../components/AddTaskButton";
import { SortSelect } from "../components/SortSelect";
import { Title } from "../components/Title";

export const HeaderContainer = () => {
  const displayForm = () => {};

  return (
    <div>
      <Title>Kanban Board</Title>
      <AddTaskButton onClick={displayForm}>+ Add Task</AddTaskButton>
      <SortSelect>
        <option>Sort by Priority</option>
        <option>High to Low</option>
        <option>Low to High</option>
      </SortSelect>
    </div>
  );
};
