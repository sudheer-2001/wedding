import { useEffect, useState } from "react";

const left = (to: any) => {
  const ms = Math.max(0, (new Date(to) as any) - (new Date() as any));
  return {
    Days: Math.floor(ms / 864e5),
    Hours: Math.floor(ms / 36e5) % 24,
    Minutes: Math.floor(ms / 6e4) % 60,
    Seconds: Math.floor(ms / 1e3) % 60,
  };
};

export default function Countdown({ to }: { to: any }) {
  const [t, setT] = useState(left(to));
  useEffect(() => {
    const id = setInterval(() => setT(left(to)), 1000);
    return () => clearInterval(id);
  }, [to]);
  return (
    <div className="flex justify-center gap-6 sm:gap-12">
      {Object.entries(t).map(([label, v]) => (
        <div key={label} className="text-center">
          <div className="font-display text-5xl sm:text-7xl tabular-nums">{String(v).padStart(2, "0")}</div>
          <div className="mt-1 text-sm text-[var(--gold)]">{label}</div>
        </div>
      ))}
    </div>
  );
}