import Loader from 'components/Loader/Loader';
import { UsersList } from 'components/UsersList/UsersList';
import { fetchUsers, updateUser } from 'components/services/fetchUsers';
const { useState, useEffect, useReducer } = require('react');

const initialState = {
  isLoading: false,
  users: null,
  error: null,
};
function reducer(state, action) {
  switch (action.type) {
    case 'fetch':
      return {
        users: action.payload,
        isLoading: false,
        error: null,
      };
    case 'follow':
      return {
        users: state.users.map(user => {
          if (user.id === action.payload) {
            user.followers += 1;
            console.log(user.followers);
            user.isFollowing = true;
          }
          return user;
        }),
      };
    case 'unfollow':
      return {};
    default:
      return;
  }
}

const Tweets = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers(page).then(response =>
      dispatch({ type: 'fetch', payload: response.data })
    );
  }, [page]);

  const handleFollowBtn = e => {
    e.preventDefault();
    const userId = e.currentTarget.id;
    dispatch({ type: 'follow', payload: userId });
    // updateUser(userId);
  };
  return (
    <>
      {state.users && (
        <UsersList users={state.users} handleFollowBtn={handleFollowBtn} />
      )}
    </>
  );
};

export default Tweets;
