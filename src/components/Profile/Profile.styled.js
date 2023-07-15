import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  margin: 0px auto;
  margin-top: 30px;

  background-color: white;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
  display: flex;
  margin-bottom: 30px;
  padding: 10px;
  align-items: center;
  flex-direction: column;

  p {
    margin-bottom: 0px;
  }
`;

export const Photo = styled.img`
  display: block;
  max-width: 150px;
  padding: 5px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const StatsList = styled.ul`
  list-style: none;
  background-color: #f14c4c;
  margin: 0;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 80px;

  li {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    border-right: 1px solid white;
  }
`;
