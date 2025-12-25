import type { FormEvent } from "react";
import { useState } from "react";
import Pinata from "./compoments/Pinata";

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
    <div className="relative flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(255,195,113,0.35),transparent_35%),_radial-gradient(circle_at_80%_10%,rgba(255,126,179,0.25),transparent_30%),_radial-gradient(circle_at_60%_80%,rgba(95,195,228,0.3),transparent_35%),_linear-gradient(135deg,#0e1525,#0a1220_50%,#0b0f1a)] px-6 py-12 text-[#e8ecf8]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-60 blur-[70px]"
        aria-hidden
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 195, 113, 0.4), rgba(255, 126, 179, 0.35))",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 translate-y-6 rounded-3xl opacity-60 blur-[70px]"
        aria-hidden
        style={{
          background:
            "linear-gradient(315deg, rgba(95, 195, 228, 0.25), rgba(120, 109, 245, 0.2))",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl rounded-3xl border border-white/10 bg-[rgba(15,20,35,0.72)] px-6 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-lg md:px-10">
        {!showPinata ? (
          <>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#ffc371]">
              Birthday Wish Maker
            </p>
            <h1 className="font-['Playfair_Display','Times_New_Roman',serif] text-[clamp(2.1rem,4vw,2.8rem)] text-[#f3f5ff]">
              Start with your name
            </h1>
            <p className="mb-6 max-w-3xl text-[#c7cce1]">
              Tell us who you are and we will craft a cheerful birthday greeting
              with your name front and center.
            </p>

            <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
              <label className="font-bold text-[#e8ecf8]" htmlFor="name">
                Your name
              </label>
              <div className="flex flex-wrap gap-3 sm:flex-nowrap">
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Type your name here"
                  autoComplete="name"
                  aria-describedby="name-hint"
                  className="min-w-[220px] flex-1 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-base text-[#f4f6ff] outline-none transition duration-150 ease-in-out placeholder:text-[#9aa5c0] focus:-translate-y-px focus:border-[#60c7ec] focus:shadow-[0_0_0_3px_rgba(96,199,236,0.2)]"
                />
                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="rounded-xl border border-transparent bg-gradient-to-r from-[#ffc371] to-[#ff7eb3] px-4 py-3 font-bold tracking-[0.01em] text-[#0c0f1c] transition duration-150 ease-in-out enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_12px_30px_rgba(255,126,179,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:grayscale sm:px-5"
                >
                  Show my message
                </button>
              </div>
              <p id="name-hint" className="text-sm text-[#9aa5c0]">
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
