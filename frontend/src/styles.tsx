import styled from "styled-components";

export const ColumnContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 0.5rem;
  align-items: center; */
  display: flex;
  width: auto;
  justify-content: space-evenly;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
