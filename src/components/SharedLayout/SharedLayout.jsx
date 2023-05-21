import Header from 'components/Header/Header';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <section className={css.container}>
        {' '}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};
