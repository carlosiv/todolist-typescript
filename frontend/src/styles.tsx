import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  //grid-template-columns: 1fr 2fr;
  grid-gap: 0.5rem;
  align-items: flex-start;
`;
