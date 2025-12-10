import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
export default function Navbar() {
  const values = useContext(TaskContext);
  return (
    <>
      <div className={`navbar ${values.dark ? "dark" : ""}`}>
        <h1>Plan Your Day </h1>
        <input
          type="text"
          value={values.search}
          onChange={(e) => values.setSearch(e.target.value)}
          className="navbar_input"
          placeholder="Search Your Task"
        />
        <button onClick={values.handleMode}>{values.darkModeText}</button>
      </div>
    </>
  );
}

// https://fakestoreapi.com/products
/* {
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}*/
