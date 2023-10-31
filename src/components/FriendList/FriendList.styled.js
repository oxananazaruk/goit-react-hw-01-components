import styled from 'styled-components';

const getOnlineFtiends = props => {
  switch (props.$isOnline) {
    case true:
      return props.theme.colors.green;
    case false:
      return props.theme.colors.red;
    default:
      return props.theme.colors.green;
  }
};

export const FriendsList = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  flex-direction: column;
  align-items: center;
`;

export const FriendCard = styled.li`
  min-width: 300px;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(3)};
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: ${p => p.theme.radii.lg};
`;

export const IsOnlineFriend = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${getOnlineFtiends};
`;
