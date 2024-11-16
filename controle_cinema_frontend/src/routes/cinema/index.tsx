import { Route, Routes } from "react-router-dom";
import { HomeCinema } from "../../ pages/cinema/home";

export const CinemaRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeCinema />} />
      </Routes>
    </>
  );
};
