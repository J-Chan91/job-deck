import { useNavigate } from "react-router-dom";
import { ImStack } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

export default function NaviBar() {
  const navigate = useNavigate();

  const handleMovePage = (url: string): void => {
    navigate(url);
  };

  return (
    <NavContainer>
      <div>
        <LogoTitle onClick={() => handleMovePage("/")}>
          <ImStack size={50} />
          JOB Deck
        </LogoTitle>

        <CheeringPhrase>파이틩! :) 👍</CheeringPhrase>

        <MobileHamburger>
          <GiHamburgerMenu size={30} />
        </MobileHamburger>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 5;

  & > div {
    width: 75vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoTitle = styled.span`
  font-size: 2rem;
  font-family: consolas;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    margin-right: 1rem;
  }
`;

const CheeringPhrase = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const MobileHamburger = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
