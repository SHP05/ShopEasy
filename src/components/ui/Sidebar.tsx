import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaHome, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { GrServices } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { BsInfoCircle } from 'react-icons/bs';
import { GrContactInfo } from 'react-icons/gr';

function Sidebar() {
  const menus = [
    { name: 'Home', Link: '/', icon: FaHome },
    { name: 'Services', Link: '/', icon: GrServices },
    { name: 'Clients', Link: '/', icon: FaUsers },
    { name: 'Profile', Link: '/', icon: CgProfile },
    { name: 'About', Link: '/', icon: BsInfoCircle },
    { name: 'Contact', Link: '/', icon: GrContactInfo },
    { name: 'Sign Out', Link: '/', icon: FaSignOutAlt },
  ];

  const [isOpen, setiOOpen] = useState(true);
  return (
    <div
      className={`bg-slate-200 h-screen p-2 duration-200 z-0 text-gray-900 ${isOpen ? 'w-60' : 'w-14'} fixed dark:bg-gray-900 dark:text-slate-200 pt-16`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          onClick={() => {
            setiOOpen(!isOpen);
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col mt-4 gap-4 relative">
        {menus.map((link, i) => (
          <Link
            to={link.Link}
            key={i}
            className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-900 hover:text-slate-200 dark:hover:bg-gray-600 rounded-md"
          >
            <div>{React.createElement(link.icon, { size: '26' })}</div>
            <h2
              style={{ transitionDelay: `${i + 5}0ms` }}
              className={`whitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}
            >
              {isOpen && link.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
