import PropTypes from "prop-types";
import s from './TransactionHistory.module.css';

const TransactionHistory = ({transactions }) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
            <tr>
                <th className={s.th}>Type</th>
                <th className={s.th}>Amount</th>
                <th className={s.th}>Currency</th>
            </tr>
            </thead>

            <tbody>
            {transactions.map(transaction => (
                <tr key={transaction.id}>
                    <td className={s.td}>{transaction.type}</td>
                    <td className={s.td}>{transaction.amount}</td>
                    <td className={s.td}>{transaction.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
}

export default TransactionHistory;