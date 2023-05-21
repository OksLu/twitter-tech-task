import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import css from './UserCard.module.css';
import { useEffect, useState } from 'react';

export const UserCard = ({ data, handleFollow }) => {
  const { id, user, avatar, tweets, followers } = data;

  const [follow, setFollow] = useState(() => {
    return JSON.parse(window.localStorage.getItem('follow'));
  });

  useEffect(() => {
    window.localStorage.setItem('follow', JSON.stringify(follow));
  }, [follow]);

  const onClick = () => {
    setFollow(!follow);
    handleFollow(id, follow);
  };
  return (
    <li className={css.item}>
      <Link href="https://goit.global/ua/" className={css.link}>
        <img src={logo} alt="goit" />
      </Link>
      <div className={css.wrapper}>
        <span className={css.span}>
          <img src={avatar} alt={user} className={css.avatar} />
        </span>
        <p className={css.info}>{tweets} TWEETS</p>
        <p className={css.info}>{followers} FOLLOWERS</p>
        {follow ? (
          <button
            className={css.followingBtnActive}
            onClick={() => onClick(id)}
          >
            Following
          </button>
        ) : (
          <button onClick={() => onClick(id)}>Follow</button>
        )}
      </div>
    </li>
  );
};
