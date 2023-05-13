import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
}
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: #666;
  text-align: center;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 10px;
}
`;

export const FooterImage = styled.div`
  display: flex;
  align-items: center;
  & a {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 380px) {
    flex-direction: column;
}
`