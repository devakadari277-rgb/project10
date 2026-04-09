import React, { useState } from "react";

function App() {
  const [flightName, setFlightName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [time, setTime] = useState("");
  const [flights, setFlights] = useState([]);

  const addFlight = () => {
    if (!flightName || !from || !to || !time) {
      alert("Please fill all fields");
      return;
    }

    const newFlight = {
      flightName,
      from,
      to,
      time,
    };

    setFlights([...flights, newFlight]);

    // clear inputs
    setFlightName("");
    setFrom("");
    setTo("");
    setTime("");
  };

  const deleteFlight = (index) => {
    const updated = flights.filter((_, i) => i !== index);
    setFlights(updated);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>✈️ Flight Reservation TODO</h1>

      <input
        placeholder="Flight Name"
        value={flightName}
        onChange={(e) => setFlightName(e.target.value)}
      /><br /><br />

      <input
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      /><br /><br />

      <input
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      /><br /><br />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      /><br /><br />

      <button onClick={addFlight}>Add Flight</button>

      <h2>Flight List</h2>

      <ul style={{ listStyle: "none" }}>
        {flights.map((f, index) => (
          <li key={index} style={{ margin: "10px" }}>
            ✈️ <b>{f.flightName}</b> | {f.from} → {f.to} | {f.time}
            <button onClick={() => deleteFlight(index)}> ❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;