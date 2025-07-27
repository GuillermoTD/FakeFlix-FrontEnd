import styled from "styled-components";

export const HeroBody = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--bgcolor);
  overflow: hidden;
  position: relative;
  box-shadow: none; //para evitar que se pueda sombrear este elemento

  .Hero__Image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit:fill;
      filter: opacity(0.5); 
    }
  }

  .Hero__MovieDescription {
    position: relative;
    display: flex;
    flex-direction: column;
    left: 0;
    top: -50%;
    width: 50%;
    height:15rem;
    padding-left: 4rem;
    gap:0.5rem;

    h3 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.2rem;
    }

    .Hero_MovieDescription__Buttons {
      width: 42%;
      height: 4rem;
      display: flex;
      gap:1rem;
      align-items: center;

      button{
        width:37%;
        height: 3rem;
        border-radius:0.2rem;
        font-size:1.08rem;
      }
    }
  }
`;
