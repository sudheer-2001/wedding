import { useEffect, useRef, useState } from "react";

const KEY = "wedding-opened";
const read = () => { try { return sessionStorage.getItem(KEY) === "1"; } catch { return false; } };
const write = () => { try { sessionStorage.setItem(KEY, "1"); } catch { /* ignore */ } };
export const useSplashScreen = () => {

    const audio = useRef(null) as any;
    const [opened, setOpened] = useState(read);
    const [playing, setPlaying] = useState(false);
  
    // Browsers block autoplay, so the click on "Open invitation" starts the music.
    const open = () => {
      setOpened(true);
       write();
      audio.current?.play().then(() => setPlaying(true)).catch(() => {});
    };
    const toggle = () => {
      if (playing) { audio.current.pause(); setPlaying(false); }
      else audio.current.play().then(() => setPlaying(true)).catch(() => {});
    };

  // Coming back from /rsvp: the visitor already clicked once, so play is allowed.
    useEffect(() => {
    if (read()) audio.current?.play().then(() => setPlaying(true)).catch(() => {});
  }, []);
  
    return {
        state: {
            audio,
            opened,
            playing,
            open,
            toggle
        },
        handler: {
            open,
            toggle
        }
    }
}