import styled from "styled-components";

interface InterfaceModal {
  isOpen: boolean;
}

export const ContainerModal = styled.div<InterfaceModal>`
  background-color: #23262d;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  overflow: hidden;

  .p-3 {
    padding: 1.5rem;
  }

  .title {
    text-align: center;
    font-family: "Saira";
  }

  .description {
    font-family: "Saira";
    font-size: 14px;
  }

  .space-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .btnBack {
    padding: 6px 20px;
    color: white;
    background: linear-gradient(#23262d, #23262d) padding-box,
      linear-gradient(to right, #3535da, #c791e2) border-box;
    border: 4px solid transparent;
    font-weight: 600;
    font-family: "Saira";
    border-radius: 50em;
    cursor: pointer;
  }

  .btnContinue {
    font-weight: 600;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #1100ffac);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    color: #ffffff;
    font-size: 1rem;
    justify-content: center;
    line-height: 1em;
    padding: 10px 20px;
    cursor: pointer;
    font-family: "Saira";
  }
`;

export const BackgroundModal = styled.div<InterfaceModal>`
  background-color: rgba(8, 20, 28, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ContainerIcon = styled.div`
  background: #373c46;
  padding: 20px;
  display: flex;
  justify-content: center;
`;
