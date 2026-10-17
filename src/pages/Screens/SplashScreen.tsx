import { useSplashScreen } from "../Hooks/SplashScreen";
import { wedding as w } from "../../utils/wedding";
import Home from "./Home";
import MusicButton from "../../components/MusicButton";
import song from "../../assets/kalyanam.mp3";

const SplashScreen = () => {
    const {state, handler} = useSplashScreen();
    return (
        <>
            <audio ref={state.audio} src={song} loop preload="auto" />
 
            <div className={`gate ${state.opened ? "open" : ""} fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--ink)] px-6 text-center text-[var(--blush)]`}>
                <p className="text-[var(--gold)]">You are invited to the wedding of</p>
                <h1 className="font-display mt-4 text-5xl sm:text-7xl">{w.groom} &amp; {w.bride}</h1>
                <button onClick={handler.open} className="mt-12 rounded-full border border-[var(--gold)] px-8 py-3 text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]">
                    Open invitation
                </button>
                <p className="mt-4 text-sm opacity-60">Best with sound on</p>
            </div>
            <Home go={state.opened} />
             {state.opened && <MusicButton playing={state.playing} onToggle={handler.toggle} />}
        </>
    )
}

export default SplashScreen;