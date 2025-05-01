import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase dark:bg-stone-800 dark:border-stone-700 sm:px-6">
      <Link to="/" className="tracking-widest dark:text-yellow-400">
        Fast React Pizza Co.
      </Link>

      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}

export default Header;
