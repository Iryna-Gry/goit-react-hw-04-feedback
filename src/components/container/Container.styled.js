import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  font-family: Sofia Sans, sans-serif;
  padding-right: 20px;
  margin: 30px auto;

  @media screen and (max-width: 767px) {
    max-width: 450px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
