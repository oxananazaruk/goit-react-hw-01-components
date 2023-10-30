import styled from 'styled-components';

export const UserCard = styled.div`
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
border-radius:  ${p => p.theme.radii.lg};`;

export const Description = styled.div`
margin: 0 auto;
text-align: center;`;

export const UserAvatar = styled.img`
margin-top: ${p => p.theme.spacing(4)};
width: 200px;
height: 200px;`;

export const Stats = styled.ul`
 display: flex;
 gap: ${p => p.theme.spacing(4)};
 justify-content: center;
 background-color: ${p => p.theme.colors.background};
 padding: ${p => p.theme.spacing(3)};`;

export const StatsItem = styled.li`
 display: flex;
 gap: ${p => p.theme.spacing(2)};
 flex-direction: column;
 align-items: center;`;