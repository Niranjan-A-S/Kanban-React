import ReactDOM from "react-dom/client";
import { Routers } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Routers />);
