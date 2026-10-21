import { useSplashScreen } from "../Hooks/SplashScreen";
import { wedding as w } from "../../utils/wedding";
import Home from "./Home";
import MusicButton from "../../components/MusicButton";
import song from "../../assets/kalyanam.mp3";
import dance from "./../../assets/dance.png";
import { useEffect, useState } from "react";


const SplashScreen = () => {
    const {state, handler} = useSplashScreen();
    // const [anim, setAnim] = useState(false);
    
        // useEffect(() => {
        //     const startInterval = setInterval(() => {
        //         setAnim((prev) => !prev);
        //     }, 1000)
    
        //     return () => clearInterval(startInterval);
        // }, [])
    return (
        <>
            <audio ref={state.audio} src={song} loop preload="auto" />
            <div className={`gate ${state.opened ? "open" : ""} fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--ink)] px-6 text-center text-[var(--blush)]`}>
                <div className={`box1 ${state.anim ? "open" : ""}`}>
                    <img className="dance-white" src={dance} width={40} height={40}/>
                </div>
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