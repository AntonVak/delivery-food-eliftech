import styled from "@emotion/styled";

export const HeaderSt = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #0d4a31;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  z-index: 10;

  .navMenu {
    text-transform: uppercase;
    li {
      padding-right: 35px;
      letter-spacing: 0.2rem;
      a {
        color: #608ffd;
        text-decoration: none;
        box-shadow: inset 0 0 0 0 #608ffd;
        transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        &:hover {
          color: #e1dada;
          box-shadow: inset 200px 0 0 0 #1f4d36;
        }
      }
      .link-form {
        &:hover {
          border-bottom: 3px solid rgb(255, 255, 255);
        }
      }
    }
    .selected {
      color: white;
    }
  }
`;
export const H4 = styled.h2`
  color: #608ffd;
  margin-bottom: 0rem;
  span {
    color: #f2f4ea;
  }
`;
