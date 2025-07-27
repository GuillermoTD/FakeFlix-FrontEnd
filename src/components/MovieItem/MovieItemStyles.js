import styled from "styled-components";

export const MovieItemBody = styled.div`
  width: 16.8rem;
  height: 10rem;
  background: lightblue;
  border-radius: 7px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: none; //para evitar que se pueda sombrear este elemento

  &:hover {
    border: 1px solid white;
  }

  &:hover img {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2, 1.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    box-shadow: none; //para evitar que se pueda sombrear este elemento
  }
`;
