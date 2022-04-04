import { ReactNode } from "react";
import styled from "styled-components";

interface ArticleTitleProps {
  children: ReactNode;
}

export default function ArticleTitle({ children }: ArticleTitleProps) {
  return <TitleContainer>{children}</TitleContainer>;
}

const TitleContainer = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
