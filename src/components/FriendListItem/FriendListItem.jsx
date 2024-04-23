import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";
export function FriendListItem({ friend }) {
  return (
    <div>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="80"
      />
      <p className={css.name}>{friend.name}</p>
      <p className={friend.isOnline ? css.isOnline : css.isOffline}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
