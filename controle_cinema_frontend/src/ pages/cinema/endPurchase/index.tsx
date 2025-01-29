import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import { ProgressBar } from "../../../components/movie/progressBar";
import Lottie from "react-lottie";
import checkAnimation from "../../../components/animations/checkright.json";
import * as S from "../styles";

export const EndPurchase = () => {
  // TODO: colocar  um lottie

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: checkAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          <Lottie
            options={defaultOptions}
            height={200}
            width={700}
            isStopped={false}
            isPaused={false}
          />
          <S.TextFinish>Compra Concluída! 🎉</S.TextFinish>
        </CardBody>
      </Card>
    </>
  );
};
