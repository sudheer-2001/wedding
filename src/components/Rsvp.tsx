import { useState } from "react";
import { Link } from "react-router-dom";
import { useWedding } from "../utils/WeddingContext";

export default function Rsvp() {
  const w = useWedding();
  const [f, setF] = useState({ name: "", attending: "yes", guests: 1, message: "" });
  const set = (k: any) => (e: any) => setF({ ...f, [k]: e.target.value });

  const send = (e: any) => {
    e.preventDefault();
    const text = `Hi! This is ${f.name}. ${f.attending === "yes" ? `I'll be there with ${f.guests} guest(s).` : "Sadly I can't make it."} ${f.message}`;
    window.open(`https://wa.me/${w.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const field = "mt-1 w-full rounded-lg border border-[var(--ink)]/30 bg-white px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]";

  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-16">
      <Link to=".." className="underline">Back to the invitation</Link>
      <h1 className="font-display mt-8 text-5xl">Will you join us?</h1>
      <p className="mt-3">Please reply so we can plan for you.</p>
      <form onSubmit={send} className="mt-8 space-y-5">
        <label className="block">Your name
          <input required value={f.name} onChange={set("name")} className={field} />
        </label>
        <label className="block">Can you come?
          <select value={f.attending} onChange={set("attending")} className={field}>
            <option value="yes">Yes, I'll be there</option>
            <option value="no">Sorry, I can't make it</option>
          </select>
        </label>
        {f.attending === "yes" && (
          <label className="block">Number of guests
            <input type="number" min="1" max="10" value={f.guests} onChange={set("guests")} className={field} />
          </label>
        )}
        <label className="block">Message for the couple (optional)
          <textarea rows={3} value={f.message} onChange={set("message")} className={field} />
        </label>
        <button className="w-full rounded-full bg-[var(--ink)] py-3 text-[var(--blush)] transition hover:bg-[var(--rose)]">Send reply on WhatsApp</button>
      </form>
    </main>
  );
}