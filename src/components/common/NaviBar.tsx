import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NaviBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [gnbList, setGnbList] = useState([
    { urlTitle: "TEST 1", address: "/" },
    { urlTitle: "TEST 2", address: "/" },
    { urlTitle: "로그인", address: "/signin" },
  ]);
  const [currentURL, setCurrentURL] = useState("");

  const handleMovePage = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    const curUrl = location.pathname.split("/");
    setCurrentURL(curUrl[curUrl.length - 1]);
  }, []);

  return (
    <NavContainer>
      <LogoTitle onClick={() => handleMovePage("/")}>R.I.P</LogoTitle>

      <GNBListBox>
        {gnbList.map((item) => (
          <li
            style={
              item.address === `/${currentURL}`
                ? { fontWeight: 900 }
                : { fontWeight: 300 }
            }
            key={item.urlTitle}
            onClick={() => handleMovePage(item.address)}
          >
            {item.urlTitle}
          </li>
        ))}
      </GNBListBox>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100vw;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const LogoTitle = styled.span`
  padding: 5px 0;
  font-size: 25px;
`;

const GNBListBox = styled.ul`
  width: 30%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  & li {
    display: inline-block;
    cursor: pointer;
  }

  & li:hover {
    font-weight: bold;
  }
`;
