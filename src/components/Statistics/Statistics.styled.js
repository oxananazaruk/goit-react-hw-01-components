import styled from 'styled-components';

const getBackgroundColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatSection = styled.section`
  margin: 0 auto;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  flex-direction: column;
  align-items: center;
  background-color: ${getBackgroundColor};
  width: 60px;
  height: 60px;
`;
