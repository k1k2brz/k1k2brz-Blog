import React from "react";
import { FooterContainer, FooterImage, FooterText, FooterWrapper } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterText>Copyright© 2023~ k1k2brz(Lee Taeil). All right reserved.</FooterText>
        <FooterImage>
          <a href="https://github.com/k1k2brz" className="footer__icon" target="_blank" rel="noreferrer noopener">
            <img src="https://img.shields.io/badge/-000000?style=flat&logo=github&logoColor=white" />
          </a>
          <a
            href="https://wonderfulwonder.tistory.com/"
            className="footer__icon"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="https://img.shields.io/badge/-000000?style=flat&logo=tistory&logoColor=white" />
          </a>
        </FooterImage>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
