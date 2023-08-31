import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ButtonSt = styled(Link)`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #1b7b55;
  color: white;
  padding: 0.5rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
`;


export const IconSpan = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: .5rem;
`;
export const IconBadge = styled.span`
 background-color: #0d4a31;
  padding: 0.2rem 1rem;
  border-radius: 20px;
  margin-left: 1.5rem;
  font-weight: bold;
`;
export const IconS = styled.span``;
