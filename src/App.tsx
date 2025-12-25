import type { FormEvent } from "react";
import { useState } from "react";
import Pinata from "./compoments/Pinata";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    setSubmittedName(trimmed);
  };

  const showPinata = Boolean(submittedName);

  return (
    <div className="page">
      <div className="halo halo-one" aria-hidden />
      <div className="halo halo-two" aria-hidden />
      <div className="card">
        {!showPinata ? (
          <>
            <p className="eyebrow">Birthday Wish Maker</p>
            <h1>Start with your name</h1>
            <p className="lede">
              Tell us who you are and we will craft a cheerful birthday greeting
              with your name front and center.
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <label className="label" htmlFor="name">
                Your name
              </label>
              <div className="input-row">
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Type your name here"
                  autoComplete="name"
                  aria-describedby="name-hint"
                />
                <button type="submit" disabled={!name.trim()}>
                  Show my message
                </button>
              </div>
              <p id="name-hint" className="hint">
                First step only: introduce yourself so the card feels personal.
              </p>
            </form>
          </>
        ) : (
          <Pinata name={submittedName} />
        )}
      </div>
    </div>
  );
}

export default App;
