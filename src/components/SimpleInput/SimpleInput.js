import { TextField } from "@material-ui/core";
import React, { useState } from "react";

export const SimpleInput = ({ label }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>{input ? input : "..."}</h2>
      </div>
      <TextField label={label} value={input} onChange={handleInputChange} />
    </div>
  );
};
