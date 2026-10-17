import { Link } from "react-router-dom";
import { wedding as w } from "../../utils/wedding";
import Countdown from "../../components/Countdown";
import Reveal from "../../components/Reveal";

export default function Home({ go }: { go: boolean }) {
  return (
    <main className="block md:hidden h-full  overflow-y-auto">
      {/* Hero */}
      <section className={`${go ? "go" : ""} relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--ink)] px-6 text-center text-[var(--blush)]`}>
      
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="dust" style={{ left: `${(i * 7 + 5) % 100}%`, animationDelay: `${i * 0.9}s`, animationDuration: `${9 + (i % 5) * 2}s` }} />
        ))}
        <p className="fade-in mb-6 text-lg text-[var(--gold)]" style={{ animationDelay: "0.2s" }}>We're getting married</p>
        <h1 className="font-display text-[clamp(3.5rem,14vw,10rem)] font-light leading-[0.95]">
          <span className="name-line"><span className="name-in" style={{ animationDelay: "0.4s" }}>{w.groom}</span></span>
          <span className="name-line italic text-[var(--gold)]"><span className="name-in" style={{ animationDelay: "0.7s" }}>&amp;</span></span>
          <span className="name-line"><span className="name-in" style={{ animationDelay: "1s" }}>{w.bride}</span></span>
        </h1>
        <p className="fade-in mt-10 text-xl sm:text-2xl" style={{ animationDelay: "1.8s" }}>{w.displayDate}</p>
        <p className="fade-in mt-1 opacity-80" style={{ animationDelay: "2s" }}>{w.venue}, {w.city}</p>
      </section>
 {/* Countdown */}
      <section className="bg-[var(--ink-soft)] px-6 py-20 text-[var(--blush)]">
        <Reveal><Countdown to={w.date} /></Reveal>
      </section>
 
      {/* Story */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl">Our story</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {w.story.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Reveal>
      </section>
 
      {/* Schedule: a real sequence, so the line + dots carry meaning */}
      <section className="bg-[var(--blush)] px-6 py-24">
        <div className="mx-auto max-w-xl">
          <Reveal><h2 className="font-display text-center text-4xl sm:text-5xl">The day</h2></Reveal>
          <ol className="mt-14 border-l border-[var(--gold)] pl-8">
            {w.events.map((e) => (
              <li key={e.title} className="relative pb-12 last:pb-0">
                <Reveal>
                  <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-[var(--gold)]" />
                  <p className="text-[var(--rose)]">{e.time}</p>
                  <h3 className="font-display text-2xl sm:text-3xl">{e.title}</h3>
                  <p className="mt-1 opacity-80">{e.note}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
 
      {/* Venue + RSVP */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl">{w.venue}</h2>
          <p className="mt-4 text-lg">{w.address}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={w.mapUrl} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--ink)] px-7 py-3 transition hover:bg-[var(--ink)] hover:text-[var(--blush)]">Get directions</a>
            <Link to="/rsvp" className="rounded-full bg-[var(--ink)] px-7 py-3 text-[var(--blush)] transition hover:bg-[var(--rose)]">Reply to the invitation</Link>
          </div>
        </Reveal>
      </section>
 
      <footer className="bg-[var(--ink)] py-10 text-center text-[var(--blush)]">
        <p className="font-display text-2xl">{w.groom} &amp; {w.bride}</p>
        <p className="mt-1 text-sm opacity-70">{w.displayDate}</p>
      </footer>
    </main>
  );
}
 