import styled from 'styled-components';

export const Section = styled.section`
  width: 300px;
  margin-bottom: 50px;
  background-color: white;

  h2 {
    text-align: center;
    text-transform: uppercase;
  }

  border: 2px solid gray;
`;

export const StatList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  border-top: 2px solid gray;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    flex-basis: calc(100% / 5);

    &:not(:last-child) {
      border-right: 2px solid gray;
    }
  }
`;
