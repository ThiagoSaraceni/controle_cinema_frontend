import { Card } from "../../../components/card";
import { CardBody } from "../../../components/cardBody";
import { ProgressBar } from "../../../components/movie/progressBar";
import Lottie from "react-lottie";
import checkAnimation from "../../../components/animations/checkright.json";
import * as S from "../styles";
import { CardWfull } from "../seats/seatsInfo/styles";
import styled from "styled-components";

const LottieContainer = styled.div`
  width: 100%;
  height: 300px;
  @media (min-width: 481px) and (max-width: 768px) {
    height: 220px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EndPurchase = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: checkAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Card>
        <CardBody>
          <ProgressBar index={2} />
        </CardBody>
      </Card>
      <CardWfull>
        <CardBody>
          <LottieContainer>
            <Lottie
              options={defaultOptions}
              isStopped={false}
              isPaused={false}
            />
          </LottieContainer>
          <S.TextFinish>Compra Concluída! 🎉</S.TextFinish>
        </CardBody>
      </CardWfull>
    </>
  );
};
