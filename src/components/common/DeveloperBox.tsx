import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export default function DeveloperBox() {
  return (
    <DeveloperBoxContainer>
      <DeveloperContainer>
        <a href="https://github.com/Yadon079" rel="noreferrer" target="_blank">
          <BsGithub size="1rem" style={{ cursor: "pointer" }} />
        </a>
        <p>한선우(B)</p>
      </DeveloperContainer>

      <DeveloperContainer>
        <a href="https://github.com/J-Chan91" rel="noreferrer" target="_blank">
          <BsGithub size="1rem" style={{ cursor: "pointer" }} />
        </a>
        <p>박종찬(F)</p>
      </DeveloperContainer>
    </DeveloperBoxContainer>
  );
}

const DeveloperBoxContainer = styled.footer`
  width: 15rem;
  display: flex;
  justify-content: space-around;

  & a {
    transition: 1.3s;
    color: #999;

    &:hover {
      transition: 1.3s;
      color: #000;
    }
  }
`;

const DeveloperContainer = styled.article`
  display: flex;
  align-items: center;

  & p {
    font-size: 0.7rem;
    margin-left: 0.5rem;
    color: #000;
  }
`;
