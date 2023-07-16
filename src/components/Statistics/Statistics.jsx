import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../utils/index';
import { Section, StatList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span>{label}</span>
            <span>{percentage}</span>
          </li>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
