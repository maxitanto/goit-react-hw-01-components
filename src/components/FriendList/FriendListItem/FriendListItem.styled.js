import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  padding: 5px;

  background-color: #dedede;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const UserAvatar = styled.img`
  margin-right: 10px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 10px;

  border-radius: 50%;
  background-color: ${({ status }) => status};
`;
