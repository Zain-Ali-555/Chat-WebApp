import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="500883703244-mset2nv4593k2s7kg41dmd4fmhonn0q7.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    
  </StrictMode>
);
