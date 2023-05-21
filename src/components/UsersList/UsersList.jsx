import { UserCard } from 'components/UserCard/UserCard';
import css from './UserList.module.css';

export const UsersList = ({ users, handleFollow }) => {
  return (
    <ul className={css.list}>
      {users.map(user => {
        return (
          <UserCard key={user.id} data={user} handleFollow={handleFollow} />
        );
      })}
    </ul>
  );
};
