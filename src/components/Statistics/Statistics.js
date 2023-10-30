export const Statistics = ({stats, title}) => {
    return (
    <section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
   {stats.map(stat => {
        return (
          <li key={stat.id}>
                <span class="label"> {stat.label}</span>
                <span class="percentage"> {stat.percentage}</span>
          </li>
        );
      })}
  </ul>
</section>
)
}