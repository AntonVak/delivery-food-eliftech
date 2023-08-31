import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Img = styled.img`
  margin-bottom: 0.5rem;
`;
export const H2 = styled.h3`
  color: #066e29;
  font-weight: 600;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
`;
export const StyledP = styled.p`
  margin-bottom: 0.5rem;
  color: #595b5f;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
export const SpanPrice = styled.span`
  color: #1f2937;
  color: rgb(180, 180, 180);
  font-size: 1.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
export const LinkCart = styled(Link)`
  display: inline-block;
  padding: 12px 28px;
  margin: 10px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-image: linear-gradient(to bottom right, #066e29, #035a20);
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 0px #013914;
  transition: all 0.2s ease-in-out;
`;

export const BtnCard = styled.button`
  display: inline-block;
  padding: 12px 28px;
  margin: 10px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-image: linear-gradient(to bottom right, #066e29, #035a20);
  border: none;
  border-radius: 30px;
  box-shadow: 0px 4px 0px #013914;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 0px #013914;
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
    background-image: linear-gradient(to bottom right, #75e284, #013914);
  }

  .button:before,
  .button:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
  }

  .button:before {
    top: -3px;
    left: -3px;
    border-radius: 40px;
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
  }

  .button:after {
    bottom: -3px;
    right: -3px;
    border-radius: 40px;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
  }
`;
