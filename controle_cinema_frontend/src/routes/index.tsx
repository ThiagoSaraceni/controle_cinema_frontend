import { BrowserRouter } from "react-router-dom";
import { CinemaRoutes } from "./cinema";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <CinemaRoutes />
    </BrowserRouter>
  );
};
