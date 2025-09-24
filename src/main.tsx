
  import { createRoot } from "react-dom/client";
  import App from "./App";
  // CSS utilitário (compilado) necessário para o layout desktop
  // Estilos locais e globais
  import "./index.css";
  // Overrides carregados por último para garantir precedência e evitar barras laterais
  import "./styles/overrides.css";

  createRoot(document.getElementById("root")!).render(<App />);
  