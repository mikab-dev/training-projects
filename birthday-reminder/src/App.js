import React, { useState } from "react";
import DATA from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(DATA);

  return (
    <main>
      <section className="container">
        <h3>{people.length > 0 ? people.length : 0} birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
