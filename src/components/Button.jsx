//This component tells Home which filter to use
//These buttons do NOT: filter data, know what cards exist, They only: send a “signal” to Home.jsx

import { useState } from "react";

function Button({ setFilter }) {
  return (
    <div>

      <button onClick={() => setFilter("active")}>
        Active
      </button>

      <button onClick={() => setFilter("inactive")}>
        Inactive
      </button>

            <button onClick={() => setFilter("all")}>
        Show All
      </button>
    </div>
  );
}

export default Button;