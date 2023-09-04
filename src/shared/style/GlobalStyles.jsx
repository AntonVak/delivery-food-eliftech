
import styled from "@emotion/styled";
// import { modernNormalizeCss } from 'emotion-modern-normalize';
// import '@fontsource/montserrat';

export const globalStyles ={
  html: {
    scrollBehavior: 'smooth'
  },
  '*': {
    boxSizing: 'border-box',
  },
  '*::before': {
    boxSizing: 'border-box',
  },
  '*::after': {
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: 'Montserrat, sans-serif',
    padding: 0,
    margin: 0,
  },
  h1: {
    fontWeight: 500,
    margin: 0,
    padding: 0,
  },
  h2: {
    fontWeight: 500,
    margin: 0,
    padding: 0,
  },
  h3: {
    fontWeight: 500,
    margin: 0,
    padding: 0,
  },
  h4: {
    fontWeight: 500,
    margin: 0,
    padding: 0,
  },
  h5: {
    fontWeight: 500,
    margin: 0,
    padding: 0,
  },
  h6: {
    fontWeight: 500,
    margin: 0,
    padding: 0,
  },
  p: {
    fontWeight: 500,
    margin: 0,
    padding: 0,
  },
  ul: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
  },
  ol: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
  },
  li: {
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  button: {
    cursor: 'pointer',
    border: 'none',
    display: 'block',
  },
}


  

 


export const Container = styled.div`
  width: min(100% - 4rem, 75rem);
  margin-inline: auto;
  
  /* width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto; */

  /* @media screen and (max-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (max-width: 468px) {
    width: 1280px;
  } */
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;


