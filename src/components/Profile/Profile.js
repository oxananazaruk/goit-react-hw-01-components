import {
  UserCard,
  Description,
  UserAvatar,
  Stats,
  StatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserCard>
      <Description>
        <UserAvatar src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <span> {stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span> {stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span> {stats.likes}</span>
        </StatsItem>
      </Stats>
    </UserCard>
  );
};
