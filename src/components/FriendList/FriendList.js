import PropTypes from "prop-types";
import s from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={s.item}>
                    <span className={friend.isOnline ? s.online : s.offline}>{friend.status}</span>
                    <img className={s.avatar} src={friend.avatar} alt="" width="48"/>
                    <p className={s.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.bool
}

export default FriendList;