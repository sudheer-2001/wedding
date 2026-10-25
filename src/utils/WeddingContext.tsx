import { createContext, useContext } from "react";
import type { Wedding } from "./weddings/types";

export const WeddingContext = createContext<Wedding | null>(null);

export const useWedding = () => {
  const w = useContext(WeddingContext);
  if (!w) throw new Error("useWedding must be used inside WeddingLayout");
  return w;
};