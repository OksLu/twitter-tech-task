import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.title}>Welcome to Twitter!</h1>
      <div className={css.card}>
        <p className={css.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos veniam
          cum soluta sapiente excepturi in iure eum quaerat ex laboriosam,
          perspiciatis iste architecto dolorem quod repudiandae illum porro.
          Cum, quod!
        </p>
      </div>
    </div>
  );
};

export default Home;
