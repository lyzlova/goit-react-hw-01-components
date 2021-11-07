import PropTypes from "prop-types";

const Statistics = ({
    title,
    stats
}) => {
    return (
        <section className="statistics">
            {title&&<h2 className="title">{title}</h2>}
            <ul className="stat-list">
                {stats.map(stat => (
                    <li key={stat.id} className="stat-item">
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}</span>
                    </li>
                ))}
            </ul>
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