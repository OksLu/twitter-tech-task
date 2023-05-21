import { LoadMore } from 'components/LoadMore/LoadMore';
import Loader from 'components/Loader/Loader';
import { UsersList } from 'components/UsersList/UsersList';
import { fetchUsers, updateUser } from 'components/services/fetchUsers';
const { useState, useEffect } = require('react');

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setLoadMore(false);

    fetchUsers(page).then(newUsers => {
      setUsers(prevState => [...prevState, ...newUsers]);
      setIsLoading(false);
      setLoadMore(true);
    });
  }, [page]);

  const handleFollow = (userId, isFollowing) => {
    const activeUsers = users.map(user => {
      if (user.id === userId) {
        const updatedUser = {
          ...user,
          followers: user.followers + (isFollowing ? -1 : 1),
        };
        updateUser(user.id, { followers: updatedUser.followers });
        return updatedUser;
      }
      return user;
    });
    setUsers(activeUsers);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <>
      {isLoading && <Loader />}
      {users && <UsersList users={users} handleFollow={handleFollow} />}
      {users.length < 12 && loadMore && <LoadMore onClick={handleLoadMore} />}
    </>
  );
};

export default Tweets;
