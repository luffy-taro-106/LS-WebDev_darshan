import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ darkMode, setDarkMode }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
