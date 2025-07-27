import styled from "styled-components";

export const Home = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
  background:var(--bgcolor);
  color:white;
`;

export const Home_Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--primary);
  font-size: 1.4rem;
  z-index: 50;
  position: absolute;
  top: 0;
`;

export const Home_Header__Navigation = styled.nav`
  width: 60%;
  height: 100%;
  padding-left: 4rem;
  display: flex;
  align-items: center;
  gap:3rem;

  ul {
    display: flex;
    list-style: none;
    font-size: 1rem;
    display: flex;
    gap: 1.5rem;
    color: white;
  }
`;

export const Home_Header__Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:100%;
  width:6rem;
  gap:1rem;
  margin-right:2rem;
`;
