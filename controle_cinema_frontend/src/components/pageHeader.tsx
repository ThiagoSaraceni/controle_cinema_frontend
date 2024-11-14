import styled from "styled-components";

interface PropTypes {
  text?: string;
  iconImg?: any;
  altImg?: string;
  iconFontAwesome?: any;
  colorIconFontAwesome?: string;
}

interface CardProps {
  colorIcon?: string;
}

const Card = styled.div<CardProps>`
  img {
    width: 2.3rem;
  }

  h2 {
    font-family: "Original Surfer", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .fai {
    font-size: 30px;
    color: ${(props) => props.colorIcon ?? "black"};
  }

  border-radius: 8px;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%) !important;
  background-color: #21262d;
  padding: 1.9rem;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
`;

export const PageHeader = ({
  iconImg,
  altImg,
  iconFontAwesome,
  colorIconFontAwesome,
  text,
}: PropTypes) => {
  return (
    <Card colorIcon={colorIconFontAwesome}>
      {iconFontAwesome && <div className="fai">{iconFontAwesome}</div>}
      {iconImg && <img src={iconImg} alt={altImg} />}
      <h2> {text}</h2>
    </Card>
  );
};

export {};
