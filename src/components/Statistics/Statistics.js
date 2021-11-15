import PropTypes from "prop-types";
import s from './Statistics.module.css';

const Statistics = ({
    title,
    stats
}) => {
    return (
        <section className={s.statistics}>
            <div className={s.content}>
                {title&&<h2 className={s.title}>{title}</h2>}
                <ul className={s.statList}>
                    {stats.map(stat => (
                        <li key={stat.id} className={s.statItem}>
                            <span className={s.label}>{stat.label}</span>
                            <span className={s.percentage}>{stat.percentage}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

Statistics.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}

export default Statistics;