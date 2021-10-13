import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({ id, avatar, name, status = false }) {
  return (
    <li key={id} className={s.item}>
      <span className={status ? `${s.on}` : `${s.off}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
