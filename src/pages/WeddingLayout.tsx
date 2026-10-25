import { Outlet, useParams } from "react-router-dom";
import { weddings } from "../utils/weddings";
import { WeddingContext } from "../utils/WeddingContext";

export default function WeddingLayout() {
  const { slug = "" } = useParams();
  const data = weddings[slug];
  if (!data) return <h3>Invitation not found</h3>;
  return (
    <WeddingContext.Provider value={data}>
      <Outlet />
    </WeddingContext.Provider>
  );
}