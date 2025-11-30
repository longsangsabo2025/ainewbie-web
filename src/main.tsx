import './lib/error-reporter';
import './lib/sentry';  // Error tracking to longsang-admin
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
