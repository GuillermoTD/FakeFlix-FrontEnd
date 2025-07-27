import styled from "styled-components";

export const LoginBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    width: 100%;
    font-size: 2.2rem;
  }

  input {
    background: #404040;
    width: 100%;
    height: 3rem;
    padding-left: 1rem;
    color: white;
    border-radius: 0.4rem;
    opacity: 1;
    font-size: 1.01rem;
  }

  input::placeholder {
    color: white;
  }
`;
