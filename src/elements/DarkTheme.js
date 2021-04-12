import React, { useState } from "react";

export default function DarkTheme() {
  const [darkTheme, setDarkTheme] = useState(true);

  function onClick() {
    document.body.classList.toggle("dark-theme");
    setDarkTheme(!darkTheme);
  }

  return (
    <div className="theme" id="theme" onClick={() => onClick()}>
      {darkTheme ? (
        <i className="icon bi bi-moon-fill"></i>
      ) : (
        <i className="icon bi bi-sun-fill"></i>
      )}
    </div>
  );
}
