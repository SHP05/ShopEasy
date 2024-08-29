import useTheme from '../../context/ThemeContext';
import { MdOutlineDarkMode, MdLightMode } from 'react-icons/md';
import { useLogOut } from '../authentication/useLogOut';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Header() {
  const { ThemeMode, darkTheme, lightTheme } = useTheme();
  const { logout, isPending, isSuccess } = useLogOut();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = () => {
    if (ThemeMode == 'light') {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const handleLogout = () => {
    logout();
    if (isSuccess) {
      console.log('logout');
      navigate('/');
      toast.success('Logout Successfully');
      window.localStorage.setItem('loggedIn', '');
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between mx-auto p-4 fixed w-full bg-gray-200 border-gray-200 z-10 dark:bg-gray-900 dark:text-gray-200">
      <a
        href="/home"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="ShopEasy Logo"
          /> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          ShopEasy
        </span>
      </a>
      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <span
          onClick={handleChange}
          className="dark:text-gray-200 cursor-pointer mx-2"
        >
          {ThemeMode == 'dark' ? (
            <MdLightMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </span>
        <span>
          <button className="mx-2" onClick={handleLogout} disabled={isPending}>
            Logout
          </button>
        </span>
        <button
          type="button"
          className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src="http://localhost:3001/avatar/defaultAvatar.jpg"
            alt="user photo"
          />
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
