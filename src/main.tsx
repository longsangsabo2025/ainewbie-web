import './lib/error-reporter';
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initGA } from './lib/google-analytics';

// Initialize Google Analytics 4
if (import.meta.env.PROD) {
  initGA();
}

createRoot(document.getElementById("root")!).render(<App />);
