import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MetaMaskProvider } from "@metamask/sdk-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") 
);

root.render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "DIMS",
          url: window.location.href,
        },
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>
);