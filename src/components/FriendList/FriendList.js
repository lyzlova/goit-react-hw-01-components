import PropTypes from "prop-types";

const FriendList = ({
    avatar,
    name,
    isOnline
}) => {
    return (
        <ul className="friend-list">
            <li className="item">
                <span className="status"></span>
                <img className="avatar" src="" alt="" width="48"/>
                <p className="name"></p>
            </li>
        </ul>
    )
}

export default FriendList;