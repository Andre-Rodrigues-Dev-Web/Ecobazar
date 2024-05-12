import styled from "styled-components";

const ContainerTopo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerLocation = styled.div`
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    .location {
      min-width: 30%;
      p{
        color: #666;
        font-size: 20px;
      }
    }
    @media (min-width: 768px) {
      width: 1200px;
      .location {
        min-width: 30%;
      }
    }
  }
`;

export { ContainerTopo, ContainerLocation };
