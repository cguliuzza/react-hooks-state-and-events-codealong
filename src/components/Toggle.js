import React, { useState } from "react";

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(false)

  const handleToggle = () => {
    setIsToggleOn(isToggleOn => !isToggleOn);
  }

  const color = isToggleOn ? 'red' : 'white';

  return <button style={{ background: color }}onClick={handleToggle}>{isToggleOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
