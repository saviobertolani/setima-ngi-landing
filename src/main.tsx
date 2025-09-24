
  import { createRoot } from "react-dom/client";
  import App from "./App";
  // CSS utilitário: usar apenas o index.css local para evitar paths cruzados no CI
  // Estilos locais e globais
  import "./index.css";
  // Overrides carregados por último para garantir precedência e evitar barras laterais
  import "./styles/overrides.css";

  createRoot(document.getElementById("root")!).render(<App />);
  