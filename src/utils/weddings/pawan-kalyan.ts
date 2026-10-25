
import song from "../../assets/kalyanam.mp3";
import type { Wedding } from "./types";

const data: Wedding = {
    groom: "Pawan Kalyan",
  bride: "Pravallika",
  date: "2026-11-12T22:24:00+05:30", // used for the countdown
  displayDate: "Thursday, 12 November 2026", // used for display
  city: "Machavaram, Andhra Pradesh",
  venue: "Gangireddypalem (V)",
  address: "Gangireddypalem (V) Machavaram (M) Palnadu(D)",
  mapUrl: "https://goo.gl/maps/nQHapUfVvTMQdKsu9?g_st=aw",
  whatsapp: "919866154231", // country code + number, no "+"
  story: [
   "Our story began with our parents’ blessings and two hearts learning to beat a little closer. ❤️✨",

    "A few shy smiles, a little teasing, and one big YES to a lifetime of stealing hearts… and each other’s snacks! 😂💕💍",

    "From a beautiful arranged match to our favorite love story — forever starts with us. ♾️❤️"
  ],
  events: [
    { time: "08:00 AM", title: "Welcome & blessings", note: "Mangala Vedukalu" },
    { time: "10:24 PM", title: "Wedding ceremony", note: "Please be seated by 10:15." },
    { time: "7:00 PM", title: "Dinner", note: "A long, relaxed meal together." },
    // { time: "7:00 PM", title: "Evening celebration", note: "Music, dancing and cake." },
  ],
  song,
};
export default data;