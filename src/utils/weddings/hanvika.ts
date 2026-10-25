
import song from "../../assets/kalyanam.mp3";
import type { Wedding } from "./types";

const data: Wedding = {
    groom: "Hanvika C",
  bride: "Saikumar M",
  date: "2026-11-22T09:30:00+05:30", // used for the countdown
  displayDate: "Sunday, 22 November 2026", // used for display
  city: "Ananthapur, Andhra Pradesh",
  venue: "Sri Sangameshwara Function Hall",
  address: "Sai Nagar, Anantapur",
  mapUrl: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjQjI6Q59WXAxUAAAAAHQAAAAAQDA..i&sca_esv=a5e9361146d2feed&mstk=AUtExfDZSMINuWforlbELchGpURmvdHxw53NJPivOg3-LgUrMafzv9IjppRz5nmZnV_Fv70BYnfVCdFpxsVxW2IrY3Wtercz9yXMnP0Sp1Q4IUoszqLf1LzRZDwPC_-mr5_k5yu2b8BZ5UU9V56rrwPzVoTo6zgqkQ46rnxDYsZQE-Jq26CGp3R9dxAYZ2Ymyhy3_zD2qFPpzCiMgWarYjipOds0IQF1mCHm0FhWIayNyhpeO-fJpEmeq9D9jZRuHGm5vDG7od97SA6QlnSky8oksFCM&hl=en&pvq=CgsvZy8xdGZmYm12ZIABAZABAQ&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bb14b1fe6a7f9b1:0xe0ccf1007b322476",
  whatsapp: "917382862092", // country code + number, no "+"
  story: [
    "Our story began with our parents’ blessings and two hearts learning to beat a little closer. ❤️✨",

    "A few shy smiles, a little teasing, and one big YES to a lifetime of stealing hearts… and each other’s snacks! 😂💕💍",

    "From a beautiful arranged match to our favorite love story — forever starts with us. ♾️❤️"
    // "We met over a cup of filter coffee that went cold because neither of us wanted to stop talking.",
    // "Five years, two cities and one very opinionated dog later, we're getting married, and we'd love you to be there.",
  ],
  events: [
    { time: "08:00 AM", title: "Welcome & blessings", note: "Mangala Vedukalu" },
    { time: "09:30 AM", title: "Wedding ceremony", note: "Please be seated by 09:20." },
    { time: "12:00 PM", title: "First Meal as Mr. & Mrs.", note: "A long, relaxed meal together." },
    // { time: "7:00 PM", title: "Evening celebration", note: "Music, dancing and cake." },
  ],
  song,
};
export default data;