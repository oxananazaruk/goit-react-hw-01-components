import { IsOnlineFriend } from './FriendList.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <IsOnlineFriend $isOnline={isOnline}></IsOnlineFriend>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};
