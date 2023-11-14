import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewColorForm() {
  const [newColor, setNewColor] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/colors");
  };
  return (
    <div>
      <h1>New Color Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Color:
          <input
            type="color"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;
