import PropTypes from 'prop-types';
import { ListItem, Status, UserAvatar } from './FriendListItem.styled';

export const FriendListItem = props => {
  const { avatar, userName, isOnline } = props;

  return (
    <ListItem>
      <Status status={isOnline ? 'green' : 'red'}></Status>
      <UserAvatar src={avatar} alt="User avatar" width="48" />
      <p>{userName}</p>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  userName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
