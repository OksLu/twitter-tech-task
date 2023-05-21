import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import css from './UserCard.module.css';

export const UserCard = ({ data, handleFollowBtn }) => {
  const { id, user, avatar, tweets, followers } = data;
  return (
    <li className={css.item} onClick={handleFollowBtn} id={id}>
      <Link href="https://goit.global/ua/" className={css.link}>
        <img src={logo} alt="goit" />
      </Link>
      <div className={css.wrapper}>
        <span className={css.span}>
          <img src={avatar} alt={user} className={css.avatar} />
        </span>
        <p className={css.info}>{tweets} TWEETS</p>
        <p className={css.info}>{followers} FOLLOWERS</p>
        <button className={css.followingBtn}>Follow</button>
      </div>
    </li>
  );
};
