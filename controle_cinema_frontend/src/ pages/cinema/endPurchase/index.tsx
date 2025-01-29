import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import { ProgressBar } from "../../../components/movie/progressBar";

export const EndPurchase = () => {
  // TODO: colocar  um lottie

  //depois remover styledInlines
  return (
    <>
      <Card>
        <CardBody>
          <ProgressBar index={2} />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{
                mixBlendMode: "multiply",
                backgroundImage: "none !important",
              }}
              src="https://e7.pngegg.com/pngimages/869/958/png-clipart-iphone-6-computer-icons-completion-angle-text.png"
              alt="CONCLUIDO"
              height={400}
              className="bg-transparent"
            />
            <h2
              style={{
                fontSize: "2rem",
                fontFamily: "Saira",
                marginTop: "1rem",
                fontWeight: "600",
              }}
            >
              Compra Concluída! 🎉
            </h2>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
