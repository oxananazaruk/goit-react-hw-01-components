import {
  StatSection,
  SectionTitle,
  StatList,
  StatItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <SectionTitle>{title}</SectionTitle>}

      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <span> {stat.label}</span>
              <span> {stat.percentage}</span>
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
};
