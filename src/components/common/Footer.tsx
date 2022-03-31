import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <FooterContainer>
      <DeveloperContainer>
        <a href="https://github.com/Yadon079" rel="noreferrer" target="_blank">
          <BsGithub size="40" style={{ cursor: "pointer" }} />
        </a>
        <p>B. 한선우</p>
      </DeveloperContainer>

      <DeveloperContainer>
        <a href="https://github.com/J-Chan91" rel="noreferrer" target="_blank">
          <BsGithub size="40" style={{ cursor: "pointer" }} />
        </a>
        <p>F. 박종찬</p>
      </DeveloperContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: flex-start;

  & a {
    color: #999;

    &:hover {
      transition: 1.3s;
      color: #000;
    }
  }
`;

const DeveloperContainer = styled.article`
  margin: 0 1rem;
  display: flex;
  align-items: center;

  & p {
    margin-left: 1rem;
    color: #999;
  }
`;
