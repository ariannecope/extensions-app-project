//We need: extensions/data → the list of things we're showing on the page
//filter → what to show

import { useState } from "react";
import cardData from "../data";
import Card from "../components/Card";
import Button from "../components/Button";
import "../App.css";

export default function Home() {
  // FULL LIST (source of truth)
  const [extensions, setExtensions] = useState(cardData);

  // FILTER RULE (what the user wants to see)
  const [filter, setFilter] = useState("active");

  // REMOVE AN ITEM
  const deleteCard = (id) => {
    setExtensions(prev =>
      prev.filter(ext => ext.id !== id)
    );
  };

  // TOGGLE ON/OFF STATE
  const handleToggle = (id) => {
    setExtensions(prev =>
      prev.map(ext =>
        ext.id === id
          ? { ...ext, isActive: !ext.isActive }
          : ext
      )
    );
  };

  // FILTER THE LIST BEFORE DISPLAYING
  const filteredExtensions = extensions.filter(ext => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true;
  });

return (
  <div className="app">

    <div className="header">
      <h2>Extensions List</h2>

      <div className="buttonGroup">
        <Button
	label="Show All"
	onClick={() => setFilter("all")}
	active={filter === "all"}
/>

<Button
	label="Active"
	onClick={() => setFilter("active")}
	active={filter === "active"}
/>

<Button
	label="Inactive"
	onClick={() => setFilter("inactive")}
	active={filter === "inactive"}
/>
      </div>
    </div>

    {/* CARDS */}
    <div className="cardContainer">
      {filteredExtensions.map(ext => (
        <Card
          key={ext.id}
          card={ext}
          onToggle={handleToggle}
          onDelete={deleteCard}
        />
      ))}
    </div>

  </div>
);
}