import style from './Photo.module.css';
import PropTypes from 'prop-types';
import PhotoOverlay from './PhotoOverlay';
import PhotoImg from './PhotoImg';
import { Link } from 'react-router-dom';

export const Photo = ({ photoData }) => {
  const {
    alt_description: alt,
    urls,
    user,
    created_at: date,
    likes,
    liked_by_user: likedByUser,
    id,
  } = photoData;

  return (
    <li className={style.item}>
      <Link to={`/photo/${id}`}>
        <PhotoImg alt={alt} urls={urls}/>
      </Link>

      <PhotoOverlay
        user={user}
        date={date}
        likes={likes}
        likedByUser={likedByUser}
        id={id}
      />
    </li>
  );
};

Photo.propTypes = {
  photoData: PropTypes.object.isRequired
};
