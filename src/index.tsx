import ReactDOM from "react-dom/client";
import { Routers } from "./routes/routers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Routers />);
