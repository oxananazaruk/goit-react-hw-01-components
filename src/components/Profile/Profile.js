import { UserCard, Description, UserAvatar, Stats, StatsItem } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <UserCard>
<Description>
    <UserAvatar
      src={avatar}
      alt="User avatar"
    />
    <p class="name">{username}</p>
                <p class="tag">@ {tag}</p>
                <p class="location">{location}</p>
  </Description>

  <Stats>
    <StatsItem>
      <span class="label">Followers</span>
                    <span class="quantity"> {stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span class="label">Views</span>
      <span class="quantity"> {stats.views}</span>
    </StatsItem>
    <StatsItem>
      <span class="label">Likes</span>
      <span class="quantity"> {stats.likes}</span>
    </StatsItem>
  </Stats>
        </UserCard>
    )
}