import styled from "styled-components";

export const AuthBody = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after{
    content: "";
    position:absolute;
    background:black;
    opacity:0.6;
    width:100%;
    height:100%;
  }

  img {
    width:100%;
    height:100%;
    transition: all .3s ease-in;
    object-fit: cover;
    position:absolute;
    z-index:0;
  }
`;

export const AuthHeader = styled.div`
  width:100%;
  height:5rem;
  color:white;
  position:absolute;
  top:0;
  z-index:40;
  display: flex;
  align-items: center;
  padding-left:2rem;

`;
