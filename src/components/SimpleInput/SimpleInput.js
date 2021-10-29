import { Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./style.css";

export const SimpleInput = ({ label }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={"input-container"}>
      <Paper elevation={24}>
        <div className={"input-inner"}>
          <h2>{input ? input : "..."}</h2>
          <TextField label={label} value={input} onChange={handleInputChange} />
        </div>
      </Paper>
    </div>
  );
};
