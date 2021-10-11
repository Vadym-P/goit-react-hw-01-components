import PropTypes from 'prop-types';
import './Profile.css';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="Profile">
      <div className="Wrapper">
        <div className="Description">
          <img src={avatar} alt={name} className="Avatar" />
          <p className="Name">{name}</p>
          <p className="Tag">{tag}</p>
          <p className="Location">{location}</p>
        </div>
        <ul className="Stats">
          <li className="Stats-item">
            <span className="Label">Followers</span>
            <span className="Quantity">{stats.followers}</span>
          </li>
          <li className="Stats-item">
            <span className="Label">Views</span>
            <span className="Quantity">{stats.views}</span>
          </li>
          <li className="Stats-item">
            <span className="Label">Likes</span>
            <span className="Quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
