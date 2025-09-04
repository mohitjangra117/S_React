import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Context>   
     <BrowserRouter>
      <App />
    </BrowserRouter>
    </Context>

  // </StrictMode>

);
