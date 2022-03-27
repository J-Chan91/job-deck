import React from "react";
import styled from "styled-components";
import Template from "../components/common/Template";

import kakao from "../styles/images/kakao-logo.png";
import google from "../styles/images/google-logo.png";
import naver from "../styles/images/naver-logo.png";

export default function SigninPage() {
  return (
    <Template>
      <SigninPageContainer>
        <h1>로그인</h1>

        <NaverSigninButton>
          <img src={naver} width={35} alt="kakao" />
          네이버 로그인
        </NaverSigninButton>

        <KakaoSigninButton>
          <img src={kakao} width={30} alt="kakao" />
          카카오 로그인
        </KakaoSigninButton>

        <GoogleSigninButton>
          <img src={google} width={30} alt="google" />
          구글 로그인
        </GoogleSigninButton>
      </SigninPageContainer>
    </Template>
  );
}

const SigninPageContainer = styled.main`
  width: 25vw;
  height: 35vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & h1 {
    font-weight: 800;
    font-size: 1.4rem;
  }
`;

const NaverSigninButton = styled.button`
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  background-color: #03c75a;
  width: 15vw;
  height: 60px;
  border: none;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & {
    cursor: pointer;
  }

  & span {
    font-weight: 900;
  }
`;

const KakaoSigninButton = styled.button`
  font-size: 1rem;
  font-weight: 800;
  color: #000;
  background-color: #fee500;
  width: 15vw;
  height: 60px;
  border: none;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  & {
    cursor: pointer;
  }

  & span {
    font-weight: 900;
  }
`;

const GoogleSigninButton = styled.button`
  font-size: 1rem;
  font-weight: 800;
  color: #848484;
  background-color: #fff;
  border: 1px solid #999;
  width: 15vw;
  height: 60px;
  border-radius: 10px;
  margin: 0 auto;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & {
    cursor: pointer;
  }

  & span {
    font-weight: 900;
  }
`;
