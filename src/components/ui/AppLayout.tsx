import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main className="ml-14">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;