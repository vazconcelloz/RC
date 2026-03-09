import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

document.title = "Grupo FBN - Planos de Saude";

createRoot(document.getElementById("root")!).render(<App />);
