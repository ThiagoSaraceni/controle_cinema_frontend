import { Route, Routes } from "react-router-dom";
import { HomeCinema } from "../../ pages/cinema/home";
import { Seats } from "../../ pages/cinema/seats";
import { TicketsMovie } from "../../ pages/cinema/tickets";
import * as MStyle from "../../ pages/cinema/styles";
import { EndPurchase } from "../../ pages/cinema/endPurchase";

export const CinemaRoutes = () => {
  return (
    <>
      <MStyle.Background>
        <MStyle.Content>
          <Routes>
            <Route path="/" element={<HomeCinema />} />
            <Route path="/seats/:id" element={<Seats />} />
            <Route path="/tickets" element={<TicketsMovie />} />
            <Route path="/end-purchase" element={<EndPurchase />} />
          </Routes>
        </MStyle.Content>
      </MStyle.Background>
    </>
  );
};
