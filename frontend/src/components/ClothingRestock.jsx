import React, { useState } from "react";
import axios from "axios";
import "../styles/ClothingRestock.css";

const ClothingRestock = ({ onRestock }) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("Pieces");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = async () => {
    await axios.post(
      "https://stocksense-lvxp.onrender.com/api/clothing/add",
      {
        name,
        quantity: { value, unit },
        assignedTo,
      },
      { withCredentials: true }
    );
    setName("");
    setValue("");
    setAssignedTo("");
    onRestock();
  };

  return (
    <div className="restock-container">
      <h2 className="restock-title">Restock Clothing</h2>

      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="restock-input"
      />

      <input
        type="number"
        placeholder="Quantity"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="restock-input"
      />

      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="restock-input"
      >
        <option>Pieces</option>
        <option>Sets</option>
      </select>

      <input
        type="text"
        placeholder="Assigned to"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        className="restock-input"
      />

      <button onClick={handleSubmit} className="restock-button">
        Add
      </button>
    </div>
  );
};

export default ClothingRestock;
