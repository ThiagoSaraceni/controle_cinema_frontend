import { Route, Routes } from "react-router-dom";
import { HomeCinema } from "../../ pages/cinema/home";
import { Seats } from "../../ pages/cinema/seats";

export const CinemaRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeCinema />} />
        <Route path="/seats" element={<Seats />} />
      </Routes>
    </>
  );
};
