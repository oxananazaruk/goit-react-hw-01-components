import {StatSection, SectionTitle, StatList, StatItem} from './Statistics.styled'

export const Statistics = ({ stats, title }) => {
    return (
    <StatSection>
        {title.length > 0 && (
        <SectionTitle>{title}</SectionTitle>
      )}

  <StatList>
   {stats.map(stat => {
        return (
          <StatItem key={stat.id}>
                <span class="label"> {stat.label}</span>
                <span class="percentage"> {stat.percentage}</span>
          </StatItem>
        );
      })}
  </StatList>
</StatSection>
)
}