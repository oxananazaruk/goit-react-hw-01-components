import { FriendsList, FriendCard } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <FriendCard key={friend.id}>
            <FriendListItem friend={friend} />
          </FriendCard>
        );
      })}
    </FriendsList>
  );
};
