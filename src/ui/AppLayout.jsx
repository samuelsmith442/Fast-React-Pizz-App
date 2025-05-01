import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import { useEffect } from 'react';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  // Initialize dark mode from localStorage or system preference on initial load
  useEffect(() => {
    if (
      localStorage.getItem('darkMode') === 'true' ||
      (localStorage.getItem('darkMode') === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] dark:bg-stone-900 dark:text-stone-200">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
