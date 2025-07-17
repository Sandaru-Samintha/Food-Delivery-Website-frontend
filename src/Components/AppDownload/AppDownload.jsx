import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />{" "}
        <span
          style={{
            background: "linear-gradient(45deg, #c5efcf, #3ee4aa, #5e1bef)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold"
            
          }}
        >
          Berry Blue
        </span>{" "}
        App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
