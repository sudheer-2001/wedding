export default function MusicButton({ playing, onToggle }: { playing: boolean, onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className={`${playing ? "" : "paused"} fixed bottom-5 right-5 z-40 flex h-12 items-center gap-2 rounded-full bg-[var(--ink)] px-4 text-[var(--gold)] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]`}
    >
      <span className="flex h-4 items-end gap-[3px]"><i className="bar" /><i className="bar" /><i className="bar" /></span>
      <span className="text-sm">{playing ? "Music on" : "Music off"}</span>
    </button>
  );
}